/*jshint esversion: 6 */
export let config = {
    // style: 'mapbox://styles/imfeld/cknxg51sa36n817paehjnggrd',
    style: 'mapbox://styles/imfeld/cks39pts43hdh17qpb1atgpnl',
    accessToken: 'pk.eyJ1IjoiaW1mZWxkIiwiYSI6ImNrZDk1Y2lmcDBzdGMycmx2NWhubnFjd2wifQ.LeVJDbIpVqOhpYeZwJk6mg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: "Haller's journey",
    subtitle: 'A portrait of the Emmental through the eyes of a medieval scholar',
    byline: '',
    footer: '',
    mapAnimation: 'flyTo',
    followPoint : true,
    driveSmoothness: 200,
    layers: {
        circle: {
            id: "animatedPoint",
            type: "circle",
            source: "pointSource",
            paint: {
                "circle-radius": 20,
                "circle-opacity": 1,
                "circle-color": "#4b433a",
                'circle-pitch-alignment': 'map',
                'circle-blur': 1
            }
        },
        line: {
            id: "animatedLine",
            type: "line",
            source: "lineSource",
            layout: {
                'line-cap': 'round'
            },
            paint: {
                "line-opacity": 1,
                "line-color": "#ef4c26",
                "line-width": 7,
            }
        }
    },
    chapters: [
        {
            id: 0,
            type: 'header',
            alignment: '',
            hidden: false,
            title: "Albrecht von Haller's Journey",
            image: '',
            subtitle: 'A portrait of the Emmental through the eyes of a 18th century polymath',
            description: 'It was 9. Juni, 1739 and long before anybody had heard about Emmentaler Cheese, when Albrecht von Haller set out to a journey to the Emmental in Switzerland, a hilly region nestled between the city of Berne and the Alps. Albrecht von Haller has defined the field of modern physiology, but he also made significant contributions to botany, which was the reason for the journey. However, his motivation wasn’t purely scientific: He was, in fact, one of the first tourists that region has ever seen.',
            marker: '',
            location: {
                center: [ 7.45599, 46.95274 ],
                zoom: 13.8,
                pitch: 70,
                bearing: 100
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 1,
            type: 'chapter',
            alignment: 'left',
            hasPath: true,
            hidden: false,
            title: 'Leaving Berne | 0 km',
            image: '',
            distance: '0 km',
            species: 0,
            subtitle: 'A torrent named Goldbach, whose abundance of the metal of the same name is more likely to be found in tales than true stories',
            description: 'Haller had left his chair at the university in Goettingen, Germany, to spend the summer in his hometown Berne. But Haller wasn’t the type of person to lift his feet up. Before the age of fifteen, he had compiled a collection of two thousand biographies of famous men and women based on the works of encyclopedists Bayle and Moreri and had written an epic of four thousand lines on the origin of the Swiss confederations. In his twenties, he had travelled the world from London to Paris to study with the European intelligentsia. Now twenty nine years old, he was eager to leave his obligations in the city behind and happily accepted an invitation by his close friend, Niklaus Gatschet, to join him on a scientific excursion to the Alpine homestead he inherited, known as Hinter-Arni. “A sweet pleasure took a hold of me” Haller wrote, in anticipation of arcadian purity he vividly recalled from his last journey to the Alps, as they left the city and moved southeast towards the lower Emmental.',
            marker: 'marker1',
            location: {
                center: [7.453844137778386, 46.947693078848218],
                zoom: 14.7,
                pitch: 70.77,
                bearing: 81.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 2,
            type: 'chapter',
            alignment: 'left',
            hasPath: true,
            hidden: false,
            title: 'The gold: Goldbach',
            image: 'x',
            distance: '21 km',
            species: 1,
            subtitle: 'A torrent named Goldbach, whose abundance of the metal of the same name is more likely to be found in tales than true stories',
            description: 'Lützelflüh-Goldbach is one of the first notable mentions in Haller’s account of the excursion. A torrent named Goldbach, whose abundance of the metal of the same name is more likely to be found in tales than true stories, Ein Wildwasser mit Namen Goldbach, von dessen Reichhaltigkeit an diesem Metall eher Fabeln als wahre Geschichten allenthalben erzählt werden. he dryly commented. But even the Celts long before Haller knew about the gold dust that the Emmental’s many rivers carry up to this day and that the river Aare brought from the Alps twenty to thirty million years ago. Vernacular tales say that if you follow the river carrying gold down to the source, a huge gold treasure is buried.',
            marker: 'marker2',
            location: {
                center: [ 7.675979605822949, 47.00282930260984 ],
                zoom: 13.5,
                pitch: 75,
                bearing: 69.11
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: custom(),
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 3,
            type: 'chapter',
            alignment: 'left',
            hasPath: true,
            hidden: false,
            title: 'Cheese and Nobility: Hinter-Arni',
            image: 'x',
            distance: '19 km',
            species: 2,
            subtitle: 'A torrent named Goldbach, whose abundance of the metal of the same name is more likely to be found in tales than true stories',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            marker: 'marker3',
            location: {
                center: [7.868078203938751, 47.020717605251669],
                zoom: 13.5,
                pitch: 30,
                bearing: 120
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'hallers-journey',
                //     opacity: 1,
                //     duration: 1000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'hallers-journey',
                //     opacity: 0,
                //     duration: 1000
                // }
            ]
        },
        {
            id: 4,
            type: 'chapter',
            alignment: 'left',
            hasPath: false,
            hidden: false,
            title: 'The nature: Lushütte',
            image: 'x',
            distance: '3 km',
            species: 3,
            subtitle: 'A torrent named Goldbach, whose abundance of the metal of the same name is more likely to be found in tales than true stories',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            marker: 'marker4',
            location: {
                center: [7.88791, 47.00467],
                zoom: 13.95,
                pitch: 43.50,
                bearing: 147.51
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'hallers-journey',
                //     opacity: 1,
                //     duration: 1000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'hallers-journey',
                //     opacity: 0,
                //     duration: 1000
                // }
            ]
        },
        {
            id: 5,
            type: 'footer',
            alignment: 'left',
            hasPath: false,
            hidden: false,
            title: 'Sources',
            image: '',
            species: 3,
            subtitle: '0 km',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            marker: '',
            location: {
                center: [7.6844, 46.9807],
                zoom: 10.3,
                pitch: 20,
                bearing: 76
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'hallers-journey',
                //     opacity: 1,
                //     duration: 1000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'hallers-journey',
                //     opacity: 0,
                //     duration: 1000
                // }
            ]
        }
    ]
};

function custom(response) {
    console.log("custom function", response);
    //response.element.style.color = 'red';
}
