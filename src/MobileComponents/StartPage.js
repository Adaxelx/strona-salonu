import React from 'react';
import Home from './HomeM.js'
import Offer from './Offer.js'
import Footer from './Footer.js'
import '../Styles/MainStyle.sass'
import Partnership from './Partnership.js';

class StartPage extends React.Component {
    state = {  }

    scrollTop = () =>{
        window.scrollTo(0,0)
    }

    componentDidMount(){
        setTimeout(this.scrollTop,500);
    }

    render() {
        return (
            <article className='startPage'>
                <Home/>
                <Offer/>
                <Partnership/>
                <Footer/>
            </article>
         );
    }
}

export default StartPage;