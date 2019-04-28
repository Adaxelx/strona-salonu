import React from 'react';
import '../Styles/MainStyle.sass'

import logo from '../images/glynt.png'

class Partnership extends React.Component {
    state = {  }

    handleScroll = ()=>{
        const {item} = this
        const scrollV = window.scrollY




            if(scrollV > item.current.offsetTop - window.innerHeight + item.current.offsetHeight/2){
                item.current.classList.add('active')
            }else{
                item.current.classList.remove('active')
            }
    }

    item = React.createRef();

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }

    render() {
        return (
            <section className='partnership'>
                <h2>Pracujemy na najlepszej jakości kosmetykach marki <span><span className='firstLetter'>G</span>lynt</span></h2>
                <img ref={this.item} src={logo} alt=""/>
                <p>Kosmetyki firmy <span>Glynt</span> są w 100% oparte na wegańskich składnikach!</p>
            </section>
         );
    }
}

export default Partnership;