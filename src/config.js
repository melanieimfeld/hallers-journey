import style from './style.json'

/*jshint esversion: 6 */
export let config = {
    // style: 'mapbox://styles/imfeld/cl21ra1zh000914naab2l38ri',
    // style: 'mapbox://styles/imfeld/cks39pts43hdh17qpb1atgpnl',
    // Prefetch style with `curl https://api.mapbox.com/styles/v1/${ownerId}/${styleId}?access_token=${accessToken}`
    style,
    accessToken: 'pk.eyJ1IjoiaW1mZWxkIiwiYSI6ImNrZDk1Y2lmcDBzdGMycmx2NWhubnFjd2wifQ.LeVJDbIpVqOhpYeZwJk6mg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    use3dTerrain: false,
    mapAnimation: 'flyTo',
    followPoint: true,
    driveSmoothness: 200,
    layers: {
        circle: {
            id: "animatedPoint",
            type: "circle",
            source: "pointSource",
            paint: {
                "circle-radius": 15,
                "circle-opacity": 1,
                "circle-color": "#ef4c26",
                'circle-pitch-alignment': 'map',
                'circle-blur': 0
            }
        },
        circleBg: {
            id: "animatedPointBg",
            type: "circle",
            source: "pointSource",
            paint: {
                "circle-radius": 26,
                "circle-opacity": 0.8,
                "circle-color": "#4b433a",
                'circle-pitch-alignment': 'map',
                "circle-blur": 1,
                "circle-translate": [0, 2]
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
            title: "Hallers Reise",
            image: '',
            subtitle: 'Das Emmental aus der Sicht eines Universalgelehrten des 18. Jahrhunderts',
            description: 'Es war der 9. Juni 1739, als sich Albrecht von Haller auf eine Reise in das Emmental aufmachte. Nebst seiner T??tigkeit als Professor der Medizin war Haller ein leidenschaftlicher Botaniker. Sein Interesse galt insbesondere der Alpenflora, weswegen er mehrere Reisen unternahm, von welchen er in seinem Werk ???Schweizer Reise??? berichtete. Auch seine Reise ins Emmental dokumentierte er ausf??hrlich. Gepr??gt von der generellen Alpenfaszination, welche die Intellektuellen des 18. Jahrhunderts erfasste, ist Hallers Reisebericht durchdrungen von dichterischen Reflexionen. Diese Begeisterung machte Albrecht von Haller wohl zu einem der ersten Touristen, den die Bewohner des Emmentals zu Gesicht bekamen.',
            marker: '',
            location: {
                center: [7.453844137778386, 46.947693078848218],
                zoom: 13,
                pitch: 70,
                bearing: 81.60
            }
        },
        {
            id: 1,
            type: 'chapter',
            alignment: 'left',
            hasPath: true,
            hidden: false,
            title: 'Abschied von Bern | km 0',
            image: 'Haller mit einem Lauch, ca. 1750 (Urheber unbekannt, Burgerbibliothek Bern)',
            distance: '0 km',
            species: 0,
            subtitle: '"Ich konnte den Anblick jener Berge nicht ertragen, die die Vaterstadt umkr??nzen. Ein su??sses Verlangen nach den Pflanzen, die ich dort in jungen Jahren gesammelt hatte in unschuldiger Lust, beseelte mich."',
            description: 'Haller Interesse an der wissenschaftlichen Forschung zeigte sich fr??h. So hatte Haller im jugendlichen Alter von 15 Jahren eine Zusammenfassung von zweitausend Biographien basierend auf der Arbeit der Enzyklop??dikern Bayle und Moreri verfasst. In seinen Zwanzigern reiste Haller nach London und Paris, um einem Anatomiestudium nachzugehen. 1736 trat Haller einen Lehrstuhl in G??ttingen an, den er 1739 vor??bergehend verliess, um Zeit in seiner Heimatstadt Bern zu verbringen. Vielleicht seiner sozialen Verpflichtungen in Berns Elite etwas ??berdr??ssig, war ihm an diesem sommerlichen Morgen des 9. Junis nichts lieber, als das Studierzimmer hinter sich zu lassen und einer Einladung seines Freundes Niklaus Gaschet ins Emmental zu folgen. Gaschet hatte einen besonderen Bezug zur Gegend, denn er hatte die Alpwirtschaft Hinterarni im Emmentalischen Napfgebiet geerbt.',
            marker: 'marker1',
            location: {
                center: [7.453844137778386, 46.947693078848218],
                zoom: 14.7,
                pitch: 70.77,
                bearing: 81.60
            }
        },
        {
            id: 2,
            type: 'chapter',
            alignment: 'left',
            hasPath: true,
            hidden: false,
            title: 'Goldene Wasser | km 21',
            image: 'Ansicht L??tzelfl??h, Emme abw??rts, 1780 (Johann Wolfgang Kleemann, Regionalmuseum Ch??echlihus)',
            distance: '21 km',
            species: 1,
            subtitle: '"Ein Wildwasser mit Namen Goldbach, von dessen Reichhaltigkeit an diesem Metall eher Fabeln als wahre Geschichten allenthalben erz??hlt werden."',
            description: 'So zogen Haller und Gaschet ??ber die moosigen Wege an den Tannenw??ldern des Wegissen vorbei, einem H??henzug, den schon die R??mer kannten. Nicht g??nzlich befreit von Romantik lobte Haller die Herrschaftlichkeit der Bauerng??ter, die den Wegissen besetzen, und die unbescholtene Fr??hlichkeit ihrer Bewohner. Schon bald ??berquerten die beiden die Emme und n??herten sich dem Dorf L??tzelfl??h-Goldbach. Mehr als die Emme faszinierte Haller ein kleines Fl??sschen namens Goldbach, welches dem Dorf seinen Namen gab. Auch wenn sich Haller mehr ??ber die Fabeln am??siert, die vom Gold des Emmentals handeln, sind viele Fl??sse in der Region tats??chlich goldhaltig. Das Gold stammt urspr??nglich aus den Alpen, wo es als sogenanntes prim??res Gold im Gestein eingeschlossen ist. Bruno Bieri, Geologe und Goldgr??ber, beschreibt in seinem Text ???Kies und Kohle - Nagelfluh und Gold???, wie die voreiszeitliche Ur-aare das Gold zusammen mit Gesteinsschutt aus den Alpen in die Gegend brachte, wo die Masse zu einem riesigen F??cher aufgesch??ttet wurde. Durch kontinuierliche Erosion gelangt das Gold vorwiegend in Form von kleinen Goldbl??ttchen bis heute in die B??che und Fl??sse. Es steckt also ein F??nkchen Wahrheit in der Fabel, die besagt, dass am Ursprung eines goldhaltigen Flusses ein Topf mit Gold zu finden sei. Haller und Gaschet jedoch verweilten nicht lange, denn es waren andere Reicht??mer, die Haller zur Weiterreise dr??ngten.',
            marker: 'marker2',
            location: {
                center: [7.675979605822949, 47.00282930260984],
                zoom: 13.5,
                pitch: 75,
                bearing: 69.11
            }
        },
        {
            id: 3,
            type: 'chapter',
            alignment: 'left',
            hasPath: true,
            hidden: false,
            title: 'Subalpine Pflanzen | km 40',
            image: 'Alpenmasslieb und Bergbadrian',
            distance: '19 km',
            species: 8,
            subtitle: '"Von den Alpenpflanzen begru??sste uns als erstes das Bergmassliebchen BELLIS MEDIA, h??ufig in der Schweiz, auch in der Ebene, an schattigen Stellen und in feuchten Winkeln der W??lder."',
            description: 'Die n??chste Schilderung Hallers widmet sich dem Aufstieg zur Hinterarnialp. Die Hinterarnialp liegt rund 670 Meter h??her als L??tzelfl??h-Goldbach und endlich kommt Haller in den Genuss der botanischen Pracht der Voralpen. Als erstes entdeckte er eine ???Bellis Media???, heute bekannt unter dem Lateinischen Namen Bellis Michelii oder Alpenmasslieb, wessen ??usserliche Merkmale er mit akribischem Detail beschrieb. Auch heute finden sich ab dem Fr??hsommer zahlreiche Vertreter davon auf den Emmentaler Wiesen. W??lder und Gr??ben durchquerend finden Haller und Gaschet bald weitere Pflanzen, unter anderem Bachnelkenwurz, eine r??tliche, mehrbl??tige Pflanze, und Bergbaldrian, beide bekannt f??r ihre Heilwirkungen. Noch w??hrend der Reise versuchte Haller, den Baldrian zu bestimmen und in die Forschung anderer zeitgen??ssischen Botaniker einzuordnen. Gesamthaft erw??hnte Haller in seinem Reisebericht um die 50 Pflanzenbu??cher und -Verzeichnisse.',
            marker: 'marker3',
            location: {
                center: [7.868078203938751, 47.020717605251669],
                zoom: 13.5,
                pitch: 30,
                bearing: 120
            }
        },
        {
            id: 4,
            type: 'chapter',
            alignment: 'left',
            hasPath: false,
            hidden: false,
            title: 'Alpen, K??se und Berner Nobel | km 43',
            image: 'Obere Lush??tte, 1839 (Johann Scheidegger, Roth-Stiftung Burgdorf)',
            distance: '3 km',
            species: 9,
            subtitle: '"Also dann liessen wir ein letztes Mal unsere Blicke von diesem Aussichtspunkt aus weit u??ber die unter uns liegenden Felder und St??dte schweifen"',
            description: 'Haller und Gaschet verbrachten die Nacht auf dem Hinterarni, die Gaschet nicht selbst bewirtschaftete, sondern vermutlich an einen K??eher verpachtet hatte. Von dort aus brachen sie sp??ter zum eigentlichen Ziel ihrer Reise auf, der Lush??ttenalp. Dass ein wohlhabender Stadtberner ein Alpgut besass, war nicht un??blich. Der internationale K??sehandel begann sich im 18. Jahrhundert zu entwickeln und das machte die Alpwirtschaften zu eintr??chtigen Kapitalanlagen f??r die Berner Nobelherren. Glaubt man den Worten Hallers, der in seinem Bericht die ???m??chtigen K??selaibe??? und den ???beachtlichen Milchertrag??? anpries, muss das Hinterarni eine ertragreiche Alp gewesen sein. Vom Hinterarni aus brachen Haller und Gaschet zur Lush??ttenalp auf. Anders als das Hinterarni, eine Herrenalp, war die Lush??ttenalp im Besitz von Emmentaler Bauern und damit eine Bauernalp. Die drei Teile der Alp, die untere, mittlere und obere Lush??tte, geh??rte jeweils unterschiedlichen K??hern. F??r diese Bauernfamilien war das K??herwesen nicht nur ein Beruf, sondern auch eine Lebensweise - eine, die ein stetes Wandern von der Alp zum Winterort und umgekehrt mit sich brachte und somit Anpassungsf??higkeit und geistige sowie physische Beweglichkeit erforderte, wie R. Heiniger-Leuenberger in der Lush??tten Chronik beschreibt. Vielleicht ist es dieses Lebensgef??hl, das Haller empfand, als er endlich auf dem Gipfel neben der Lush??ttenalp stand und ein letztes Mal seinen Blick u??ber die unter ihm liegenden Felder, Seen und St??dte schweifen liess.',
            marker: 'marker4',
            location: {
                center: [7.88791, 47.00467],
                zoom: 13.95,
                pitch: 43.50,
                bearing: 147.51
            }
        },
        {
            id: 5,
            type: 'footer',
            alignment: 'left',
            hasPath: false,
            hidden: false,
            title: 'Quellen',
            image: '',
            species: 9,
            subtitle: '0 km',
            description: <p>Dieser Text st??tzt sich auf den von A.G. Roth und W. Rytz aus dem Lateinischen ??bersetzen Reisebericht ???Iter Helveticum??? von Albrecht von Haller und der Lush??tten Chronik von Regina M. Heiniger-Leuenberger. Die ??bersetzung von ???Iter Helveticum??? wurde urspr??nglich im Burgdorfer Jahrbuch 1987 ver??ffentlicht. Sowohl die <a href='http://www.lushuette.ch/index.php/aktuell'> Hinterarnialp</a> als auch die <a href='http://www.lushuette.ch/index.php/aktuell'>Lush??tte</a> existieren auch 300 Jahre sp??ter noch und sind heute genossenschaftlich gef??hrte Alpwirtschaften. Sie sind von Sumiswald aus - in einer ??hnlichen Etappe wie Haller und Gaschet sie unternommen haben - in ungef??hr 3 Stunden zu Fuss erreichbar.</p>,
            marker: '',
            location: {
                center: [7.6844, 46.9807],
                zoom: 10.5,
                pitch: 0,
                bearing: 76
            }
        }
    ]
};