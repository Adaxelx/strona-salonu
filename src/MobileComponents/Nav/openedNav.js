import React from 'react';
import '../../Styles/MainStyle.sass'


const openedNav = (props) => {
    return (
        <nav className={props.active ? 'active' : ''}>
            <ul>
                <li><span>Start</span> <span>00</span></li>
                <li><span> Oferta</span><span>01</span></li >
                <li><span>Umów się!</span> <span>02</span></li>
            </ul>
        </nav>
     );
}

export default openedNav;