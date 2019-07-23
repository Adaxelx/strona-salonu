import React from 'react';

import Footer from './Footer.js'

class ContactPage extends React.Component {
    state = {
        username: '',
        number: '',
        message:'',
     }

     handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
     }

    scrollTop = () => {
        window.scrollTo(0, 0)
    }

    componentDidMount() {
        setTimeout(this.scrollTop, 500);
    }

    render() {
        return (
            <article className='contactPage'>
                <section className='contactSection'>
                <h2 className="title"><span className='firstLetter'>U</span>mów się!</h2>
                <section className='contactTypes'>
                    <h3 className='subtitle'>Możesz to zrobić poprzez:</h3>
                    <p className='telephoneNumer'><i className="fas fa-mobile-alt"></i> 666 000 333</p>
                    <aside><span>Ważne!</span> Proszę dzwonić tylko w godzinach pracy (podane w sekcji poniżej).</aside>
                </section>
                 </section>
                <Footer/>
            </article>
         );
    }
}

export default ContactPage;