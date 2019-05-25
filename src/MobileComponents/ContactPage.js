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
            <>
            <article className='contactPage'>
                <section className='contactSection'>
                <h2 className="title"><span className='firstLetter'>U</span>mów się!</h2>
                <section className='contactTypes'>
                    <h3 className='subtitle'>Możesz to zrobić poprzez:</h3>
                    <p className='telephoneNumer'><i className="fas fa-mobile-alt"></i> 666 000 333</p>
                    <aside><span>Ważne!</span> Proszę dzwonić tylko w godzinach pracy (podane w sekcji poniżej).</aside>
                </section>
                <form action="">
                    <h3 className='subtitle'>Lub za pomocą formularza:</h3>
                    <label className='name' htmlFor="user">
                        <p>Imię i Nazwisko</p>
                        <input placeholder='Imię i nazwisko' type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange}></input>
                    </label>
                    <label className='number' htmlFor="phone-number">
                        <p>Numer telefonu</p>
                        <input placeholder='Numer telefonu' type="number" id="number" name="number" value={this.state.email} onChange={this.handleChange}></input>
                    </label>
                    <label className='message' htmlFor="message">
                        <p>Rodzaj usługi i przybliżona data</p>
                        <textarea id="message" name="message" value={this.state.message} onChange={this.handleChange}></textarea>
                    </label>
                    <button>Wyślij</button>
                    <aside>Data wizyty zostanie podana podczas rozmowy telefonicznej, ewetnualnie wysłana przez SMS lub mail w zależności od preferencji klienta.</aside>
                </form>
                </section>
                <Footer/>
            </article>
            </>
         );
    }
}

export default ContactPage;