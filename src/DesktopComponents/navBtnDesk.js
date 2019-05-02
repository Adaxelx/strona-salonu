import React from 'react';
import '../Styles/MainStyle.sass'
import {NavLink} from 'react-router-dom'

class Nav extends React.Component {
    state = {  }
    render() {
        return (
            <nav className='deskNav'>
            <ul>
               <NavLink exact to='/'><li>Start</li></NavLink>
               <NavLink exact to='/offer'><li>O mnie</li></NavLink>
                <NavLink exact to='/contact'><li>Umów się!</li></NavLink>
            </ul>
            <p>tel. 503 432 435</p>
            </nav>
         );
    }
}

export default Nav;