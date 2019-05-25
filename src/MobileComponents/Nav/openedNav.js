import React from 'react';
import '../../Styles/MainStyle.sass'
import {NavLink} from 'react-router-dom'

const openedNav = (props) => {
    return (
        < nav className = {
            props.active ? 'active openedNav' : 'openedNav'
        } >
            <section className='navList'>
                <NavLink onClick={props.handleClick} to='/' ><span>Start</span><span>00</span></NavLink>
                <NavLink onClick={props.handleClick} to='/contact'><span>Umów się!</span><span>01</span></NavLink>
                <NavLink to='/gallery'  onClick={props.handleClick}><span>Galeria</span><span>02</span></NavLink>
            </section>
        </nav>
     );
}

export default openedNav;