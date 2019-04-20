import React from 'react';
import '../../Styles/MainStyle.sass'


const openedNav = (props) => {
    return (
        <nav className={props.active ? 'active' : ''}>
            <ul>
                <li>Start <span>00</span></li>
                <li>Oferta <span>01</span></li>
                <li>Umów się! <span>02</span></li>
            </ul>
        </nav>
     );
}

export default openedNav;