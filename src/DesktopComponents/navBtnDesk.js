import React from 'react';
import '../Styles/MainStyle.sass'
class Nav extends React.Component {
    state = {  }
    render() {
        return (
            <nav className='deskNav'>
            <ul>
                <li>Start</li>
                <li>O mnie</li>
                <li>Umów się!</li>
            </ul>
            <p>tel. 503 432 435</p>
            </nav>
         );
    }
}

export default Nav;