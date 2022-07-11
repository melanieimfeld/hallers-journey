import React from 'react';
import flowerIcon from './assets/images/flower-icon.svg';
import img from './assets/images/1-min.png';
import img2 from './assets/images/2-min.png';
import img3 from './assets/images/3-min.png';
import img4 from './assets/images/4-min.png';

class Story extends React.Component {
    getStoryElement(chapter, opacity) {
        if (chapter.type === 'chapter') {
            return <Chapter
                key={chapter.id}
                id={chapter.id}
                image={chapter.image}
                title={chapter.title}
                subtitle={chapter.subtitle}
                description={chapter.description}
                species={chapter.species}
                visibility={opacity}
            />
        }
        if (chapter.type === 'footer') {
            return <Footer
                key={chapter.id}
                title={chapter.title}
                subtitle={chapter.subtitle}
                description={chapter.description}
                visibility={opacity}
            />
        }
    }

    render() {
        const chapters = this.props.chapters;
        const opacity = this.props.visibility ? 'hidden' : 'visible';

        return (
            <div className='story-container'>
                {chapters.map(chapter =>
                    this.getStoryElement(chapter, opacity)
                )}
            </div>
        );
    }
}

function Footer(props) {
    return (
        <div className='step left footer' style={{ visibility: props.visibility }}>
            <h2>{props.title}</h2>
            <hr />
            {props.description}
        </div>
    );
}

function Chapter(props) {
    return (
        <div className='step left chapter' style={{ visibility: props.visibility }}>
            <h2>{props.title}</h2>
            <hr />
            <h3>{props.subtitle}</h3>
            <DataViz species={props.species} />
            <p className='mainText'>{props.description}</p>
            <img alt={props.title} src={getImage(props.id)} />
            <p className='imgText'>{props.image}</p>
        </div>
    );
}

function getImage(key) {
    switch (key) {
        case 1:
            return img
        case 2:
            return img2
        case 3:
            return img3
        case 4:
            return img4
        default:
            return img4
    }
}

function DataViz(props) {
    const species = new Array(props.species).fill(0);
    return (
        <div className='counter-container' >
            <h4 className='icon-text' >Anzahl Spezies:</h4>
            {species.map((elem, idx) =>
                <img key={idx.toString()} alt={`species ${idx.toString()}`} className='icon' src={flowerIcon} width={33} height={60} />
            )}
        </div>
    );
}


export default Story
