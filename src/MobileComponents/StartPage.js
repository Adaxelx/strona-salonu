import React from 'react';
import Home from './HomeM.js'
import Offer from './Offer.js'

import '../Styles/MainStyle.sass'

class StartPage extends React.Component {
    state = {  }

    scrollTop = () =>{
        window.scrollTo(0,0)
    }

    componentDidMount(){
        setTimeout(this.scrollTop,600);
    }

    componentWillUnmount(){

    }

    render() {
        return (
            <section className='startPage'>
                <Home/>
                <Offer/>
            </section>
         );
    }
}

export default StartPage;