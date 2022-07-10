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
    const line = createLine(rawData, config.driveSmoothness);
    const empty = {
        type: 'FeatureCollection',
        features: [{ type: 'Feature', geometry: { type: 'LineString', coordinates: [] } }],
    };
    const [isVisible, setVisibility] = useState(false);

    const handleChange = () => {
        setVisibility(!isVisible);
    }

    // Init scrollama, destroying the previous instance to prevent leaks
    let scroller = null;
    const resetScrollama = () => {
        if (!map.current) return
        if (scroller) scroller.destroy()
        scroller = scrollama()
            .setup({ step: '.step', offset: 0.5, progress: true })
            .onStepEnter(response => actions.enter(response, config, map.current))
            .onStepProgress(response => actions.progress(response, config, map.current, line))
            .onStepExit(response => actions.exit(response));
    };

    // Since the map emits the `load` event only after fetching tiles,
    // we need to init scrollama and emit progress events earlier
    // to make sure the map doesn't load tiles we aren't interested in.
    // Interval is a hack, there's probably a better way.
    // We will remove it once the map finished loading.
    let scrollReset = setInterval(resetScrollama, 200);
    // Reinit on react renders
    useEffect(resetScrollama);

    // Init mapbox-gl
    // The earlier map gets the final set of parameters,
    // the less time it will waste on fetching / rendering the wrong thing,
    // so we do our best to calculate all settings before calling the constructor
    // and not call any methods later on
    useEffect(() => {
        if (!mapContainer.current) return;
        if (map.current) return;

        const { center, zoom, bearing, pitch } = config.chapters[0].location;
        const { style } = config;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: {
                ...style,
                sources: {
                    ...style.sources,
                    lineSource: { type: 'geojson', data: empty },
                    pointSource: { type: 'geojson', data: empty },
                    pointSourceBg: { type: 'geojson', data: empty },
                },
                layers: [
                    ...style.layers,
                    config.layers.line,
                    config.layers.circleBg, // todo: before markers
                    config.layers.circle, // todo: before markers
                ],
            },
            center,
            zoom,
            bearing,
            pitch,
            interactive: false,
        });

        map.current.on('load', () => {
            // This is the final time we need to reset scrollama
            clearInterval(scrollReset);
            resetScrollama();
        });
    });

    // Set map padding
    useEffect(() => {
        if (!map.current) return;

        const { width } = mapContainer.current.getBoundingClientRect();
        const isBig = width > 1440;
        const isMedium = !isBig && width > 550;
        const mapOffset = isBig ? 0.3 : isMedium ? 0.28 : 0;
        const left = width * mapOffset
        map.current.setPadding({ left });
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
                <Story chapters={config.chapters} visibility={isVisible} />
            </Suspense>
            <Button visibility={isVisible} onClick={handleChange} />
        </div>
    );
}