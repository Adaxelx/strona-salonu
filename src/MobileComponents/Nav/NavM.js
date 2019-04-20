import React from 'react';
import NavBtn from './btnNav.js'

class NavM extends React.Component {
    state = {
        active: false,
    }

    handleClick = () =>{
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        return (
            <NavBtn active={this.state.active} handleClick={this.handleClick}/>
         );
    }
}

export default NavM;