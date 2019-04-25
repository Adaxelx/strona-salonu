import React from 'react';
import '../../Styles/MainStyle.sass'
import {NavLink} from 'react-router-dom'

const openedNav = (props) => {
    return (
        <nav className={props.active ? 'active' : ''}>
            <section className='navList'>
                <NavLink onClick={props.handleClick} to='/start' ><span>Start</span><span>00</span></NavLink>
                <NavLink onClick={props.handleClick} to='/offer'><span>Oferta</span><span>01</span></NavLink>
                <NavLink><span>Umów się!</span><span>02</span></NavLink>
            </section>
        </nav>
     );
}

export default openedNav;