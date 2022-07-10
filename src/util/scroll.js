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

        if (element.className.includes('header')) {
            element.style.opacity = Math.round(1 - progress);
        }

        const setCenter = center => {
            if (!config.followPoint || !center) return;

            const { lng, lat } = map.getCenter()
            const previous = [lng, lat]
            const round = x => Math.round(x * 1e3)
            const isSame = String(previous.map(round)) === String(center.map(round))
            if (isSame) return;

            map.easeTo({ center, zoom: 13, bearing: chapter.location.bearing, pitch: 65 });
        }

        const finishedSteps = Math.max(0, index - 1)
        const stepProgress = !index ? 0 : Math.round(progress * config.driveSmoothness);
        const movingLine = changeCenter(stepProgress, finishedSteps, data);
        map.getSource('lineSource').setData(movingLine);

        if (element.className.includes('chapter')) {
            const { features: [{ geometry }] } = movingLine
            setCenter(geometry.coordinates.slice(-1)[0])
        }

        if (element.className.includes('footer') && map.getPitch() !== 0) {
            map.setPitch(0);
            map.fitBounds([
                [7.411651611328124, 46.93291653811045],
                [7.922859191894531, 47.0284823920254]
            ], { bearing: 76, padding: map.getPadding() });
        }
    }
}
