import React from 'react';
import '../Styles/MainStyle.sass'

class Offer extends React.Component{

    handleScroll = () => {
        const scrollY = window.scrollY;
        if(scrollY>this.title.current.offsetTop + this.title.current.offsetHeight*2 -window.innerHeight){
            this.title.current.classList.add('active')
        }
    }

    title = React.createRef();

    componentDidMount(){
        this.handleScroll();
        window.addEventListener('scroll',this.handleScroll)
    }
     componentWillUnmount(){
         window.removeEventListener('scroll', this.handleScroll)
    }

    render(){
        return (
        <main className='offer'>
            <h1 ref={this.title} className='title'>Nasza oferta</h1>
        </main>
        );
    }

}

export default Offer;