import React from 'react';
import Footer from './Footer.js'
import '../Styles/MainStyle.sass'
import Images from './Images.js'

class Gallery extends React.Component {
    state = {  }

    showImg = () => {

    }

    render() {
        return (
            <article className="gallery">
                <h2 className="titleGal"><span className='firstLetter'>P</span>rzykładowe prace</h2>
                <h3 className="subtitleGal">Po więcej naszych prac zapraszamy na naszego <a href="https://www.facebook.com/pracowniafryzjerskabeatapatejuk/" target="_blank" rel="noopener noreferrer" className="facebook">Facebooka</a> i <a href="https://www.instagram.com/pracowniafryzjerska.beatapatej/" target="_blank" rel="noopener noreferrer" className="instagram">Instagrama</a></h3>
                <Images showImg={this.showImg}/>
                <Footer/>
            </article>
         );
    }
}

export default Gallery;