import React from 'react';
import '../Styles/MainStyle.sass'
import {NavLink} from 'react-router-dom'

let prevScrollpos = window.pageYOffset;

class Nav extends React.Component {
    state = {  }

    handleScroll = () =>{
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos < currentScrollPos && currentScrollPos > 50) {
            this.nav.current.style.transform = `translateY(-40px)`
        } else {
            this.nav.current.style.transform = `translateY(0px)`
        }
        prevScrollpos = currentScrollPos;
    }

    nav = React.createRef()

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }

    render() {
        return (
            <nav ref={this.nav} className='deskNav'>
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