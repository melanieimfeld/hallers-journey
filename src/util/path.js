import along from "@turf/along";
import { lineString } from "@turf/helpers";
import length from "@turf/length";

/** Takes the initial featureCollection containing 3 features and recalculates each segement to have the same distance between points **/
function createLine(data, driveSmoothness) {
    const geojsonFeatureArray = data.features.map((section) => {
        let geojsonFeature = {
            type: "FeatureCollection",
            features: [
                {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates: [],
                    },
                },
            ],
        };
        const line = lineString(section.geometry.coordinates[0]);
        const lineDist = length(line, { units: "kilometers" });
        const segment = lineDist / driveSmoothness;

        for (let i = 0; i <= driveSmoothness; i++) {
            const pointonLine = along(line, segment * i);
            geojsonFeature.features[0].geometry.coordinates.push([
                pointonLine.geometry.coordinates[0],
                pointonLine.geometry.coordinates[1],
            ]);
        }
        return geojsonFeature
    })
    return geojsonFeatureArray
}

/** Recalculates path every time scroller is moved **/
function changeCenter(progress, slide, data) {
    const getCoordinates = d => !d ? [] : d.features[0].geometry.coordinates

    const coordinates = [
        ...data.slice(0, slide).map(getCoordinates).flat(),
        ...getCoordinates(data[slide]).slice(0, progress)
    ];

    return {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates,
                },
            },
        ],
    };
}

export { createLine, changeCenter }
