import React from 'react';
import '../Styles/MainStyle.sass'


class AboutMe extends React.Component {
    state = {  }
    render() {
        return (
            <section className='aboutPage'>
                <h1 className='title'><span className='firstLetter'>O</span> mnie</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste hic aperiam voluptates debitis libero mollitia voluptate vitae, ea voluptatem aut recusandae incidunt quibusdam, cumque ab ratione saepe autem. Ratione, vitae.</p>
            </section>
         );
    }
}

export default AboutMe;