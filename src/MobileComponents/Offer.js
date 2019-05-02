import React from 'react';
import '../Styles/MainStyle.sass'
class Offer extends React.Component{



    handleScroll = () => {
        const scrollY = window.scrollY;
        if(scrollY>this.title.current.offsetTop + this.title.current.offsetHeight*2 -window.innerHeight){
            this.title.current.classList.add('active')
        }else{
            this.title.current.classList.remove('active')
        }

    }

    title = React.createRef();

    componentDidMount(){
        // this.handleScroll();
        window.addEventListener('scroll',this.handleScroll)
    }
     componentWillUnmount(){
         window.removeEventListener('scroll', this.handleScroll)
    }

    render(){
        return (
        <main className='offer'>
            <h1 ref={this.title} className='title'><span className='firstLetter'>N</span>asza oferta</h1>
            <section className='priceList'>
                <div className='service'>
                    <h2>Usługa</h2>
                    <p>Strzyżenie męskie</p>
                    <p>Strzyżenie damskie</p>
                    <p>Strzyżenie grzywki</p>
                    <p>Strzyżenie Split-Ender</p>
                    <p>Modelowanie</p>
                    <p>Koloryzacja</p>
                    <p>Koloryzacja + strzyżenie</p>
                    <p>Koloryzacja + strzyżenie + modelowanie</p>
                    <p>Zabieg odmładziania włosów TRI JUVEN + step 3</p>
                    <p>Zabieg TURBO nawilżania</p>
                    <p>Zabieg POPCORN</p>
                    <p>Prostowanie pielęgnacyjne</p>
                    <p>Baleyage</p>
                    <p>Baleyage + strzyżenie</p>
                    <p>Dekoloryzacja</p>
                    <p>Dekoloryzacja + koloryzacja</p>
                    <p>Pasemka</p>
                    <p>Pasemka + strzyżenie</p>
                    <p>Pasemka + strzyżenie + modelowanie</p>
                    <p>Sombre/Ombre</p>
                    <p>Sombre/Ombre + strzyżenie</p>
                    <p>Refleksy</p>
                    <p>Refleksy + farba</p>
                    <p>Refleksy + farba + strzyżenie</p>
                    <p>Upięcie okolicznościowe</p>
                    <p>Upięcie ślubne</p>
                    <p>Upięcie próbne</p>
                </div>
                <div className='price'>
                    <h2>Cena</h2>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                    <p>120-300zł</p>
                </div>
            </section>
        </main>
        );
    }

}

export default Offer;