import { point } from "@turf/helpers";
import { changeCenter } from './path.js';

export const actions = {
    exit: (response) => {
        response.element.classList.remove('active');
    },
    enter: (response, config, map) => {
        const { element } = response;
        element.classList.add('active');    
        
        const chapter = config.chapters.find(
            (chap) => chap.id === response.index
        );
        const speciesList = element.querySelectorAll('.icon');;
    
        Array.from(speciesList).forEach( (item, idx) => {
            item.style.animationTimingFunction = "ease-in-out";
            item.style.animationDelay = `${idx * 0.1}s`;
        });

        if (element.className.includes('chapter')) {
            map.getSource('pointSource').setData(point(chapter.location.center));
            map.getSource('pointSourceBg').setData(point(chapter.location.center));
        }
   
    },
    progress: (response, config, map, data) => {

        const { index, progress, element } = response;
        let stepProgress;
        let movingLine;
    
        const chapter = config.chapters.find(
            (chap) => chap.id === response.index
        );
    
    
        if (element.className.includes('header')) {
            response.element.style.opacity = Math.round(1 - response.progress);
        }
    
        if (element.className.includes('left') && chapter.hasPath) {
            //stepProgress = Math.round(response.progress * config.driveSmoothness + config.driveSmoothness*driveSlideNum);
            stepProgress = Math.round(progress * config.driveSmoothness);
    
            movingLine = changeCenter(
                stepProgress,
                index - 1,
                data
            );

            map.getSource('lineSource').setData(movingLine);
            if (config.followPoint && Math.floor(progress) % 0.6 === 0 ) {
                map.easeTo({
                    center: movingLine.features[0].geometry.coordinates[movingLine.features[0].geometry.coordinates.length - 1],
                    zoom: 13,
                    bearing: chapter.location.bearing,
                    pitch: 65
                });
            }
        }
            
    }
}