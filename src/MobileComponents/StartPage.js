import React from 'react';
import Home from './HomeM.js'
import Offer from './Offer.js'

import '../Styles/MainStyle.sass'

class StartPage extends React.Component {
    state = {  }

    componentDidMount(){
        console.log(window.scrollY)
    }

    componentWillUnmount(){
        console.log(window.scrollY)
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