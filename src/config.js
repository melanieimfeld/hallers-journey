/*jshint esversion: 6 */
export let config = {
    // style: 'mapbox://styles/imfeld/cl21ra1zh000914naab2l38ri',
    style: 'mapbox://styles/imfeld/cks39pts43hdh17qpb1atgpnl',
    accessToken: 'pk.eyJ1IjoiaW1mZWxkIiwiYSI6ImNrZDk1Y2lmcDBzdGMycmx2NWhubnFjd2wifQ.LeVJDbIpVqOhpYeZwJk6mg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    use3dTerrain: false,
    mapAnimation: 'flyTo',
    followPoint : true,
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
            description: 'Es war der 9. Juni 1739, als sich Albrecht von Haller auf eine Reise in das Emmental aufmachte. Nebst seiner Tätigkeit als Professor der Medizin war Haller ein leidenschaftlicher Botaniker. Sein Interesse galt insbesondere der Alpenflora, weswegen er mehrere Reisen unternahm, von welchen er in seinem Werk „Schweizer Reise“ berichtete. Auch seine Reise ins Emmental dokumentierte er ausführlich. Geprägt von der generellen Alpenfaszination, welche die Intellektuellen des 18. Jahrhunderts erfasste, ist Hallers Reisebericht durchdrungen von dichterischen Reflexionen. Diese Begeisterung machte Albrecht von Haller wohl zu einem der ersten Touristen, den die Bewohner des Emmentals zu Gesicht bekamen.',
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
            subtitle: '"Ich konnte den Anblick jener Berge nicht ertragen, die die Vaterstadt umkränzen. Ein süsses Verlangen nach den Pflanzen, die ich dort in jungen Jahren gesammelt hatte in unschuldiger Lust, beseelte mich."',
            description: 'Haller Interesse an der wissenschaftlichen Forschung zeigte sich früh. So hatte Haller im jugendlichen Alter von 15 Jahren eine Zusammenfassung von zweitausend Biographien basierend auf der Arbeit der Enzyklopädikern Bayle und Moreri verfasst. In seinen Zwanzigern reiste Haller nach London und Paris, um einem Anatomiestudium nachzugehen. 1736 trat Haller einen Lehrstuhl in Göttingen an, den er 1739 vorübergehend verliess, um Zeit in seiner Heimatstadt Bern zu verbringen..Vielleicht seiner sozialen Verpflichtungen in Berns Elite etwas überdrüssig, war ihm an diesem sommerlichen Morgen des 9. Junis nichts lieber, als das Studierzimmer hinter sich zu lassen und einer Einladung seines Freundes Niklaus Gaschet ins Emmental zu folgen. Gaschet hatte einen besonderen Bezug zur Gegend, denn er hatte die Alpwirtschaft Hinterarni im Emmentalischen Napfgebiet geerbt.',
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
            image: 'Ansicht Lützelflüh, Emme abwärts, 1780 (Johann Wolfgang Kleemann, Regionalmuseum Chüechlihus)',
            distance: '21 km',
            species: 1,
            subtitle: '"Ein Wildwasser mit Namen Goldbach, von dessen Reichhaltigkeit an diesem Metall eher Fabeln als wahre Geschichten allenthalben erzählt werden."',
            description: 'So zogen Haller und Gaschet über die moosigen Wege an den Tannenwäldern des Wegissen vorbei, einem Höhenzug, den schon die Römer kannten. Nicht gänzlich befreit von Romantik lobte Haller die Herrschaftlichkeit der Bauerngüter, die den Wegissen besetzen, und die unbescholtene Fröhlichkeit ihrer Bewohner. Schon bald überquerten die beiden die Emme und näherten sich dem Dorf Lützelflüh-Goldbach. Mehr als die Emme faszinierte Haller ein kleines Flüsschen namens Goldbach, welches dem Dorf seinen Namen gab. Auch wenn sich Haller mehr über die Fabeln amüsiert, die vom Gold des Emmentals handeln, sind viele Flüsse in der Region tatsächlich goldhaltig. Das Gold stammt ursprünglich aus den Alpen, wo es als sogenanntes primäres Gold im Gestein eingeschlossen ist. Bruno Bieri, Geologe und Goldgräber, beschreibt in seinem Text „Kies und Kohle - Nagelfluh und Gold“, wie die voreiszeitliche Ur-aare das Gold zusammen mit Gesteinsschutt aus den Alpen in die Gegend brachte, wo die Masse zu einem riesigen Fächer aufgeschüttet wurde. Durch kontinuierliche Erosion gelangt das Gold vorwiegend in Form von kleinen Goldblättchen bis heute in die Bäche und Flüsse. Es steckt also ein Fünkchen Wahrheit in der Fabel, die besagt, dass am Ursprung eines goldhaltigen Flusses ein Topf mit Gold zu finden sei. Haller und Gaschet jedoch verweilten nicht lange, denn es waren andere Reichtümer, die Haller zur Weiterreise drängten.',
            marker: 'marker2',
            location: {
                center: [ 7.675979605822949, 47.00282930260984 ],
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
            subtitle: '"Von den Alpenpflanzen begrüsste uns als erstes das Bergmassliebchen BELLIS MEDIA, häufig in der Schweiz, auch in der Ebene, an schattigen Stellen und in feuchten Winkeln der Wälder."',
            description: 'Die nächste Schilderung Hallers widmet sich dem Aufstieg zur Hinterarnialp. Die Hinterarnialp liegt rund 670 Meter höher als Lützelflüh-Goldbach und endlich kommt Haller in den Genuss der botanischen Pracht der Voralpen. Als erstes entdeckte er eine „Bellis Media“, heute bekannt unter dem Lateinischen Namen Bellis Michelii oder Alpenmasslieb, wessen äusserliche Merkmale er mit akribischem Detail beschrieb. Auch heute finden sich ab dem Frühsommer zahlreiche Vertreter davon auf den Emmentaler Wiesen. Wälder und Gräben durchquerend finden Haller und Gaschet bald weitere Pflanzen, unter anderem Bachnelkenwurz, eine rötliche, mehrblütige Pflanze, und Bergbaldrian, beide bekannt für ihre Heilwirkungen. Noch während der Reise versuchte Haller, den Baldrian zu bestimmen und in die Forschung anderer zeitgenössischen Botaniker einzuordnen. Gesamthaft erwähnte Haller in seinem Reisebericht um die 50 Pflanzenbücher und -Verzeichnisse.',
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
            title: 'Alpen, Käse und Berner Nobel | km 43',
            image: 'Obere Lushütte, 1839 (Johann Scheidegger, Roth-Stiftung Burgdorf)',
            distance: '3 km',
            species: 9,
            subtitle: '"Also dann liessen wir ein letztes Mal unsere Blicke von diesem Aussichtspunkt aus weit über die unter uns liegenden Felder und Städte schweifen"',
            description: 'Haller und Gaschet verbrachten die Nacht auf dem Hinterarni, die Gaschet nicht selbst bewirtschaftete, sondern vermutlich an einen Küeher verpachtet hatte. Von dort aus brachen sie später zum eigentlichen Ziel ihrer Reise auf, der Lushüttenalp. Dass ein wohlhabender Stadtberner ein Alpgut besass, war nicht unüblich. Der internationale Käsehandel begann sich im 18. Jahrhundert zu entwickeln und das machte die Alpwirtschaften zu einträchtigen Kapitalanlagen für die Berner Nobelherren. Glaubt man den Worten Hallers, der in seinem Bericht die „mächtigen Käselaibe“ und den „beachtlichen Milchertrag“ anpries, muss das Hinterarni eine ertragreiche Alp gewesen sein. Vom Hinterarni aus brachen Haller und Gaschet zur Lushüttenalp auf. Anders als das Hinterarni, eine Herrenalp, war die Lushüttenalp im Besitz von Emmentaler Bauern und damit eine Bauernalp. Die drei Teile der Alp, die untere, mittlere und obere Lushütte, gehörte jeweils unterschiedlichen Kühern. Für diese Bauernfamilien war das Küherwesen nicht nur ein Beruf, sondern auch eine Lebensweise - eine, die ein stetes Wandern von der Alp zum Winterort und umgekehrt mit sich brachte und somit Anpassungsfähigkeit und geistige sowie physische Beweglichkeit erforderte, wie R. Heiniger-Leuenberger in der Lushütten Chronik beschreibt. Vielleicht ist es dieses Lebensgefühl, das Haller empfand, als er endlich auf dem Gipfel neben der Lushüttenalp stand und ein letztes Mal seinen Blick über die unter ihm liegenden Felder, Seen und Städte schweifen liess.',
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
            description: <p>Dieser Text stützt sich auf den von A.G. Roth und W. Rytz aus dem Lateinischen übersetzen Reisebericht „Iter Helveticum“ von Albrecht von Haller und der Lushütten Chronik von Regina M. Heiniger-Leuenberger. Die Übersetzung von „Iter Helveticum“ wurde ursprünglich im Burgdorfer Jahrbuch 1987 veröffentlicht. Sowohl die <a href='http://www.lushuette.ch/index.php/aktuell'> Hinterarnialp</a> als auch die <a href='http://www.lushuette.ch/index.php/aktuell'>Lushütte</a> existieren auch 300 Jahre später noch und sind heute genossenschaftlich geführte Alpwirtschaften. Sie sind von Sumiswald aus - in einer ähnlichen Etappe wie Haller und Gaschet sie unternommen haben - in ungefähr 3 Stunden zu Fuss erreichbar.</p>,
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