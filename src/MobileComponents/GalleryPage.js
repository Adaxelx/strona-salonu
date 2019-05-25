import React from 'react';
import Footer from './Footer.js'
import '../Styles/MainStyle.sass'


class Gallery extends React.Component {
    state = {  }
    render() {
        return (
            <article className="gallery">
                <h2 className="title"><span className='firstLetter'>P</span>rzykładowe prace</h2>
                <section className='images'></section>
                <Footer/>
            </article>
         );
    }
}

export default Gallery;