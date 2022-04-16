import React from 'react';
import img0 from './assets/images/locator-map.svg';


export function Header(props) {
    return (
        <div className='step header'>
            <div className='headerInner'>
                <h1>{props.title}</h1>
                <hr />
                <h2>{props.subtitle}</h2>
                <p>{props.description}</p>
                <div className='headerImg'>
                    <img alt={props.title} src={img0}/>
                <div/>
            </div>
            </div>
        </div>
    );
}