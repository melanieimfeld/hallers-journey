import {ReactComponent as Hide} from './assets/images/btnhide.svg';
import {ReactComponent as Show} from './assets/images/btnshow.svg';

export function Button(props) {
    return (
    <button className='btn' aria-label='hideText' onClick={() => props.onClick(props.visibility)}>
        {props.visibility ? <Hide/> : <Show/>}
    </button>
    )
}