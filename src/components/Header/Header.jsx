import { useState } from 'react';

import './Header.css';

export default function HeaderButton({srcImage, onClick}) {        
    const [hover, setHover] = useState();
    
    function crestHover() {
        setHover(!hover);    
    };
        
    return (
        <div id="crest" className={hover ? srcImage.name : undefined} onMouseEnter={crestHover} onMouseLeave={crestHover} onClick={onClick}>
            <img src={srcImage.image} alt={srcImage.name}/>
        </div>
    );
};