import { point } from "@turf/helpers";
import { changeCenter } from './path.js';

export const actions = {
    exit: (response) => {
        const { element } = response;
        element.classList.remove('active');
    },
    enter: (response, config, map) => {
        const { index, element } = response;
        element.classList.add('active');

        [...element.querySelectorAll('.icon')].forEach((item, idx) => {
            item.style.animationTimingFunction = "ease-in-out";
            item.style.animationDelay = `${idx * 0.1}s`;
        });

        if (element.className.includes('chapter')) {
            const chapter = config.chapters.find((chap) => chap.id === index);
            const center = point(chapter.location.center)
            map.getSource('pointSource').setData(center);
            map.getSource('pointSourceBg').setData(center);
        }
    },
    progress: (response, config, map, data) => {
        const { index, progress, element } = response;
        const chapter = config.chapters.find(chapter => chapter.id === index);

        const atBottom = element.className.includes('footer')
            || document.body.offsetHeight <= window.innerHeight + window.scrollY;

        if (element.className.includes('header')) {
            element.style.opacity = Math.round(1 - progress);
        }

        const setCenter = center => {
            if (!config.followPoint || !center || atBottom) return;

            const target = { center, zoom: 13, bearing: chapter.location.bearing, pitch: 65 }
            const targetKey = JSON.stringify(['easeTo', target])

            if (map.targetKey === targetKey) return;
            map.targetKey = targetKey

            map.easeTo(target);
        }

        const finishedSteps = Math.max(0, index - 1)
        const stepProgress = !index ? 0 : Math.round(progress * config.driveSmoothness);
        const movingLine = changeCenter(stepProgress, finishedSteps, data);
        map.getSource('lineSource').setData(movingLine);

        if (element.className.includes('chapter')) {
            const { features: [{ geometry }] } = movingLine
            setCenter(geometry.coordinates.slice(-1)[0])
        }

        if (atBottom && map.getPitch() !== 0) {
            const target = [[
                [7.411651611328124, 46.93291653811045],
                [7.922859191894531, 47.0284823920254]
            ], { bearing: 76, padding: map.getPadding() }]
            const targetKey = JSON.stringify(['fitBounds', target])

            if (map.targetKey === targetKey) return;
            map.targetKey = targetKey

            map.setPitch(0);
            map.fitBounds(...target);
        }
    }
}
