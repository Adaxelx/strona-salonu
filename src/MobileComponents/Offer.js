import React from 'react';
import '../Styles/MainStyle.sass'
const refs = []
class Offer extends React.Component{



    handleScroll = () => {
        const scrollY = window.scrollY;
        if(scrollY>this.title.current.offsetTop + this.title.current.offsetHeight*2 -window.innerHeight){
            this.title.current.classList.add('active')
        }
        // else{
        //     this.title.current.classList.remove('active')
        // }

        refs.forEach(ref => {
            if (scrollY > ref.current.offsetTop + ref.current.offsetHeight * 2 - window.innerHeight) {
                ref.current.classList.add('active')
            }
            // else{
            // ref.current.classList.remove('active')
            // }
        })

    }

    createRefs = () =>{
        for(let i=0;i<26;i++){
            refs[i] = React.createRef();
        }
    }

    title = React.createRef();

    componentDidMount(){
        this.createRefs();
        window.addEventListener('scroll',this.handleScroll)
    }
     componentWillUnmount(){
         window.removeEventListener('scroll', this.handleScroll)
    }

    render(){
        return (
        <main className='offer'>
            <h1 ref={this.title} className='title'>Nasza oferta</h1>
            <section className='priceList'>
                <div className='service'>
                    <h2>Usługa</h2>
                    <p ref={refs[0]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[1]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[2]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[3]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[4]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[5]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[6]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[7]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[8]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[9]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[10]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[11]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[12]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[13]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[14]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[15]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[16]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[17]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[18]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[19]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[20]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[21]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[22]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[23]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[24]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[25]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                    <p ref={refs[26]}>Zabieg odmładzania włosów TRI JUVEN + step 3</p>
                </div>
                <div className='price'>
                    <h2>Cena</h2>
                    {/* <p ref={refs[27]}>120-300zł</p>
                    <p ref={refs[28]}>120-300zł</p>
                    <p ref={refs[29]}>120-300zł</p>
                    <p ref={refs[30]}>120-300zł</p>
                    <p ref={refs[31]}>120-300zł</p>
                    <p ref={refs[28]}>120-300zł</p>
                    <p ref={refs[27]}>120-300zł</p>
                    <p ref={refs[28]}>120-300zł</p>
                    <p ref={refs[28]}>120-300zł</p>
                    <p ref={refs[27]}>120-300zł</p>
                    <p ref={refs[28]}>120-300zł</p>
                    <p ref={refs[28]}>120-300zł</p>
                    <p ref={refs[27]}>120-300zł</p>
                    <p ref={refs[28]}>120-300zł</p>
                    <p ref={refs[28]}>120-300zł</p>
                    <p ref={refs[27]}>120-300zł</p>
                    <p ref={refs[28]}>120-300zł</p>
                    <p ref={refs[28]}>120-300zł</p>
                    <p ref={refs[27]}>120-300zł</p>
                    <p ref={refs[28]}>120-300zł</p>
                    <p ref={refs[28]}>120-300zł</p>
                    <p ref={refs[27]}>120-300zł</p>
                    <p ref={refs[28]}>120-300zł</p>
                    <p ref={refs[28]}>120-300zł</p>
                    <p ref={refs[27]}>120-300zł</p>
                    <p ref={refs[28]}>120-300zł</p>
                    <p ref={refs[28]}>120-300zł</p> */}
                </div>
            </section>
        </main>
        );
    }

}

export default Offer;