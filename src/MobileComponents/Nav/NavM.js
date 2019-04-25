import React from 'react';
import NavBtn from './btnNav.js'
import OpenedNav from './openedNav.js'
class NavM extends React.Component {
    state = {
        active: false,
    }

    handleClick = () =>{
        this.setState({
            active: !this.state.active
        })
    }

    render(){
        return (
            <>
                <OpenedNav active={this.state.active} handleClick={this.handleClick}/>
                <NavBtn active={this.state.active} handleClick={this.handleClick}/>
            </>
         );
    }
}

export default NavM;