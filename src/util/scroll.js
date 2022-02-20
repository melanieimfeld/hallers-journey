import { point } from "@turf/helpers";
import { changeCenter } from './path.js';

export const actions = {
    exit: (response) => {
        response.element.classList.remove('active');
    },
    enter: (response, config, map) => {
        // console.log("some variable", variable);
        response.element.classList.add("active");    
        const chapter = config.chapters.find(
            (chap) => chap.id === response.index
        );
    
        //setActiveChapter(chapter);
        
         // find each element that is not set to opacity:1 and set it to 1
        const speciesList = response.element.querySelectorAll('.icon');;
        // console.log('species', speciesList);
    
        Array.from(speciesList).forEach( (item, idx) => {
            // console.log("item", item);
            //if (idx > 0){
                item.style.animationTimingFunction = "ease-in-out";
                item.style.animationDelay = `${idx * 0.15}s`;
            //}
        } )
    
        map.getSource('pointSource').setData(point(chapter.location.center));
            
        // if (config.followPoint === true) {
        //         map.current.flyTo({
        //             center: chapter.location.center,
        //             zoom: chapter.location.zoom,
        //             bearing: chapter.location.bearing,
        //             pitch: chapter.location.pitch
        //         });
        // }
        return 'hi'
    
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
            // console.log("slideindex", index);
    
            movingLine = changeCenter(
                stepProgress,
                index - 1,
                data
            );
            // setMovingSlideNum(movingSlideNum + 1);
            // console.log("moveline", response.progress)
            // console.log('movingline', movingLine);
            map.getSource('lineSource').setData(movingLine);
            if (config.followPoint && Math.floor(progress) % 0.3 === 0 ) {
                // console.log('movingline', Math.floor(progress));
                map.flyTo({
                    center: movingLine.features[0].geometry.coordinates[movingLine.features[0].geometry.coordinates.length - 1],
                    zoom: 13,
                    bearing: chapter.location.bearing,
                    pitch: 70
                });
            }
        }
            
    }
}