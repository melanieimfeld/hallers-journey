import React from 'react';
import icon from './assets/images/icon.svg';
import {ReactComponent as Hide} from './assets/images/btnhide.svg';
import {ReactComponent as Show} from './assets/images/btnshow.svg';
import img from './assets/images/placeholder.png';

class Story extends React.Component {
    getStoryElement(chapter, opacity) {
        //console.log('what is chapter', chapter.type === 'chapter', chapter.type);

        if (chapter.type === 'header') {
            return <Header
                key={chapter.id}
                title={chapter.title}
                subtitle={chapter.subtitle}
                description={chapter.description}
            />
        }
        if (chapter.type === 'chapter') {
            return <Chapter
                key={chapter.id}
                title={chapter.title}
                subtitle={chapter.subtitle}
                description={chapter.description}
                species={chapter.species}
                style={opacity}
            />
        }
        if (chapter.type === 'footer') {
            return <Footer
                key={chapter.id}
                title={chapter.title}
                subtitle={chapter.subtitle}
                description={chapter.description}
            />
        }
    }

    render() {
        const chapters = this.props.chapters;
        const opacity = this.props.visibility? 0 : 0.85;
        console.log('opacity', this.props.visibility, opacity);
        //console.log('chpaters', chapters, this.props.slideNum);

        return (
            <div className='story-container'>
                {chapters.map(chapter =>
                    this.getStoryElement(chapter, opacity)
                )}
            </div>
        );
    }
}

function Header(props) {
    return (
        <div className='step header'>
            <div className='headerInner'>
                <h1>{props.title}</h1>
                <hr />
                <h2>{props.subtitle}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

function Footer(props) {
    return (
        <div className='step left'>
            <h2>{props.title}</h2>
            <hr />
            <ul>
                <li>{props.subtitle}</li>
                <li>{props.subtitle}</li>
                <li>{props.subtitle}</li>
                <li>{props.subtitle}</li>
                <li>{props.subtitle}</li>
                <li>{props.subtitle}</li>
                <li>{props.subtitle}</li>
            </ul>
        </div>
    );
}

function Chapter(props) {
    console.log('opacity props in chapter', props.style);
    return (
        <div className='step left' style={{opacity : props.style}}>
            <h2>{props.title}</h2>
            <hr />
            <DataViz species={props.species} />
            <h3>{props.subtitle}</h3>
            <p>{props.description}</p>
            <img alt={`Image for ${props.title}`} src={img}/>
        </div>
    );
}

function DataViz(props) {
    const species = new Array(props.species).fill(0);
    return (
        <div className='counter-container' >
            <h4 className='icon-text' >20km | Species counted:</h4>
            {species.map((elem, idx) =>
                <img key={idx.toString()} alt={`species ${idx.toString()}`} className={idx >= props.species-1 ? 'icon' : 'icon-fixed'} src={icon} />
            )}
        </div>
    );
}

function Button(props) {
    return (
    <button className='btn' onClick={() => props.onClick(props.visibility)}>
        {props.visibility ? <Hide/> : <Show/>}
    </button>
    )
}

export {Story, Button}