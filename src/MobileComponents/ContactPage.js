import React from 'react';

import Footer from './Footer.js'

class ContactPage extends React.Component {
    state = {  }

        scrollTop = () => {
            window.scrollTo(0, 0)
        }

        componentDidMount() {
            setTimeout(this.scrollTop, 500);
        }

    render() {
        return (
            <>
            <article className='contactPage'>
                <section className='contactSection'>
                <h2 className="title"><span className='firstLetter'>U</span>mów się!</h2>
                <section className='contactTypes'>
                    <h3>Możesz to zrobić poprzez:</h3>
                    <p><i className="fas fa-mobile-alt"></i> 666 000 333</p>
                    <p>Ważne! Proszę dzwonić tylko w godzinach pracy.</p>
                </section>
                </section>
                <Footer/>
            </article>
            </>
         );
    }
}

export default ContactPage;