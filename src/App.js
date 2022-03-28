import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'intersection-observer';
import scrollama from 'scrollama';

import { config } from './config';
import { createLine } from './util/path';
import { actions } from './util/scroll';
import { Button, Story } from './components';
import { rawData } from './assets/data/hallers_reise';

mapboxgl.accessToken = config.accessToken;

/*todo:
- shorten intro
- Cleanup config and pass config as entire object to components
- make all images the same size to improve performance
- Cleanup code / unused assets
*/

export default function App() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const scroller = scrollama();
    const data = createLine(rawData, config.driveSmoothness);
    const feature = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: [],
                },
            },
        ],
    };
    const [isVisible, setVisibility] = useState(false); 

    const handleChange = () => {
        setVisibility(!isVisible);
    }

    useEffect(() => {
        if (map.current) return;

        const { center, zoom, bearing, pitch } = config.chapters[0].location;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: config.style,
            center: center,
            zoom: zoom,
            bearing: bearing,
            pitch: pitch,
            interactive: false
        })
    });

    useEffect(() => {
        map.current.on('load', () => {
            map.current.addSource('lineSource', {
                type: 'geojson',
                data: feature
            });

            map.current.addSource('pointSource', {
                type: 'geojson',
                data: feature
            });

            map.current.addSource('pointSourceBg', {
                type: 'geojson',
                data: feature
            });

            map.current.addLayer(config.layers.line);
            map.current.addLayer(config.layers.circleBg, 'markers');
            map.current.addLayer(config.layers.circle, 'markers');

            const mapContainerSize = mapContainer.current.getBoundingClientRect();
            console.log('mapcontainer', mapContainerSize);
            let mapOffset = 0;
            
            if (mapContainerSize.width >= 551 && mapContainerSize.width <= 1440 ) {
                mapOffset = 0.28;
            }
            if (mapContainerSize.width > 1440) {
                mapOffset = 0.3;
            }

            map.current.setPadding({left: mapContainerSize.width * mapOffset});
           
            scroller
                .setup({
                    step: '.step',
                    offset: 0.5,
                    progress: true,
                    debug: true
                })
                .onStepEnter((response) => actions.enter(response, config, map.current))
                .onStepProgress((response) => actions.progress(response, config, map.current, data))
                .onStepExit((response) => actions.exit(response));
            
            // bottom of page is reached, zoom out to entire route
            window.onscroll = (ev) => {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    console.log('end of scroll');
                    map.current.setPitch(0);
                    // map.current.setBearing(76);
                    map.current.fitBounds([
                        [
                            7.411651611328124,
                            46.93291653811045
                        ],
                        [
                            7.922859191894531,
                            47.0284823920254
                        ]
                    ], {
                    padding: {left: mapContainerSize.width * mapOffset},
                    bearing: 76
                });
                }
            };

        });
    });

    return (
        <div>
            <div ref={mapContainer} className='map-container' />
            <Story chapters={config.chapters} visibility={isVisible}/>
            <Button visibility={isVisible} onClick={handleChange}/>
        </div>
    );
}