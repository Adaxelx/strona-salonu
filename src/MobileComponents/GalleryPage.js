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
                <h2 className="title"><span className='firstLetter'>P</span>rzykładowe prace</h2>
                <Images showImg={this.showImg}/>
                <Footer/>
            </article>
         );
    }
}

export default Gallery;