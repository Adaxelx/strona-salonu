import React from 'react';
import '../Styles/MainStyle.sass'


class AboutMe extends React.Component {
    state = {  }
    render() {
        return (
            <section className='aboutPage'>
                <h1 className='title'><span className='firstLetter'>O</span> mnie</h1>
                <p className='intro'>Nazywam się Beata Patejuk i fryzjerstwo od zawsze było moją pasją. Prowadzę własny salon od września 2017 roku, wcześniej od XX lat pracowałam w innych salonach gdzie też zdobywałam doświadczenie.</p>
                <h2 className='subtitle'><span className='firstLetter'>U</span>kończone kursy: </h2>
            </section>
         );
    }
}

export default AboutMe;