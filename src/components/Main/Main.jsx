import "./Main.css"

import { CREST_IMAGE, CREST_INFO } from '../../data';

export default function Main({index}) {
    return (
        <div id='main'>
            <h1 id="crest-title">
                <span>{CREST_INFO[index].title[0]}</span>
                <span className={CREST_IMAGE[index].name + "-mark"}>{CREST_INFO[index].title[1]}</span>
            </h1>
            <p id="crest-content">{CREST_INFO[index].content}</p>
        </div>
    )
}