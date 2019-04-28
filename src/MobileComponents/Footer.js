import React from 'react';

import '../Styles/MainStyle.sass'

let refs = []

class Footer extends React.Component{

    handleScroll = () =>{
        const {footer, aside, aside2, title,title2,title3} = this
        const scrollV = window.scrollY

        refs = [aside,aside2,title,title2,title3]

        refs.forEach(ref => {
            if (scrollV - footer.current.offsetTop > ref.current.offsetTop - window.innerHeight + ref.current.offsetHeight) {
                ref.current.classList.add('active')
            }
            else{
                 ref.current.classList.remove('active')
            }
        })
    }

    footer = React.createRef()
    aside = React.createRef()
    aside2 = React.createRef()
    title = React.createRef()
    title2 = React.createRef()
    title3 = React.createRef()


    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll)
    }

    componentWillUnmount(){
        console.log('xD')
        window.removeEventListener('scroll', this.handleScroll)
    }

    render(){
        const {footer, aside, aside2, title,title2,title3} = this
    return (
        <footer ref={footer}>
            <aside  ref={aside} className='media'><i className="fab fa-instagram"></i></aside>
            <aside ref={aside2} className='media'><i className="fab fa-facebook-f"></i></aside>
            <section className='visit'>
                <h3 ref={title} className='title'><span className='firstLetter'>U</span>mów wizytę</h3>
                <p className='content'>Jeśli Twoje włosy wymagają szczególnej opieki, są zniszczone słońcem lub nieudanym zabiegiem kosmetycznym, jeśli wybierasz się na uroczystość, która wymaga pieknej stylizacji lub po prostu chcesz odświeżyć fryzurę - zadzwoń do nas! Postaramy się umówić wizytę w najbardziej dogodnym terminie. Aby umówić wizytę <a href="/start">Kliknij tutaj!</a></p>
                <section className='contact'><h3 className="title"><span className='firstLetter'>L</span>ub skontaktuj się poprzez:</h3>
                <p><i className="fas fa-phone-volume"></i>493 534 623</p>
                <p><i className="far fa-envelope"></i>beatapatejuk@wp.pl</p>
                </section>
            </section>
            <section className='hours'>
                <h3 ref={title2} className='title'><span className='firstLetter'>G</span>odziny otwarcia</h3>
                <ul>
                    <li><span>Poniedziałek:</span> 09:00-17:00</li>
                    <li><span>Wtorek:</span> 09:00-17:00</li>
                    <li><span>Środa:</span> Nieczynne</li>
                    <li><span>Czwartek:</span> 10:00-18:00</li>
                    <li><span>Piątek:</span> 10:00-18:00</li>
                    <li><span>Sobota:</span> 08:00-14:00</li>
                    <li><span>Niedziela:</span> Nieczynne</li>
                </ul>
            </section>
            <section className='place'>
                <h3 ref={title3} className='title'><span className='firstLetter'>J</span>ak dojechać?</h3>
                <iframe jsx-ally='map' title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.8326413037253!2d23.143715015789184!3d52.02814647972414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472190d84182a933%3A0xceda46e5f60ef5a8!2sPracownia+Fryzjerska+Beata+Patejuk!5e0!3m2!1spl!2spl!4v1556474525223!5m2!1spl!2spl"
                allowFullScreen></iframe>
            </section>

        </footer>
     );
    }
}

export default Footer;