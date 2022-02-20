import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'intersection-observer';
import scrollama from 'scrollama';

import { config } from './config';
import { createLine } from './util/path';
import { actions } from './util/scroll';
import { Button, Story } from './components';
import { rawData } from './assets/data/hallers_reise';
import { img } from './assets/images/img1.png';

mapboxgl.accessToken = config.accessToken;

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

        const { center, zoom } = config.chapters[0].location;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: config.style,
            center: center,
            zoom: zoom,
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

            map.current.addLayer(config.layers.line);
            map.current.addLayer(config.layers.circle, 'markers');

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
                    map.current.flyTo({
                        center: config.chapters[5].location.center,
                        zoom: config.chapters[5].location.zoom,
                        bearing: config.chapters[5].location.bearing,
                        pitch: config.chapters[5].location.pitch
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