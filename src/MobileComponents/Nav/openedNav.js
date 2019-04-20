import React from 'react';
import '../../Styles/MainStyle.sass'


const openedNav = (props) => {
    return (
        <nav className={props.active ? 'active' : ''}>
            <ul>
                <li>Start</li>
                <li>Oferta</li>
                <li>Umów się!</li>
            </ul>
        </nav>
     );
}

export default openedNav;