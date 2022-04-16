import React, { useRef, useEffect, useState, lazy, Suspense } from 'react';
import mapboxgl from 'mapbox-gl';
import 'intersection-observer';
import scrollama from 'scrollama';

import { config } from './config';
import { createLine } from './util/path';
import { actions } from './util/scroll';
import { Header } from './Header';
import { Button } from './Button';
import { rawData } from './assets/data/hallers_reise';
const Story = lazy(() => import('./Story'));

mapboxgl.accessToken = config.accessToken;

/*todo:
- shorten intro
- Improve performance (interaction observer)
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
                    progress: true
                })
                .onStepEnter((response) => actions.enter(response, config, map.current))
                .onStepProgress((response) => actions.progress(response, config, map.current, data))
                .onStepExit((response) => actions.exit(response));
            
            // bottom of page is reached, zoom out to entire route
            window.onscroll = (ev) => {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    map.current.setPitch(0);
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
            {/* <Story chapters={config.chapters} visibility={isVisible}/> */}
            <Header
                key={config.chapters[0].id}
                title={config.chapters[0].title}
                subtitle={config.chapters[0].subtitle}
                description={config.chapters[0].description}
            />
            <Suspense fallback={<div>Loading Component</div>}>
                <Story chapters={config.chapters} visibility={isVisible}/>
            </Suspense>
            <Button visibility={isVisible} onClick={handleChange}/>
        </div>
    );
}