import React from "react";

import "Root/MainStyle.sass";
import { NavLink } from "react-router-dom";
let refs = [];

class Footer extends React.Component {
  handleScroll = () => {
    const { footer, aside, aside2, title, title2, title3 } = this;
    const scrollV = window.scrollY;

    refs = [aside, aside2, title, title2, title3];

    refs.forEach((ref) => {
      if (
        scrollV - footer.current.offsetTop >
        ref.current.offsetTop - window.innerHeight + ref.current.offsetHeight
      ) {
        ref.current.classList.add("active");
      } else {
        ref.current.classList.remove("active");
      }
    });
  };

  footer = React.createRef();
  aside = React.createRef();
  aside2 = React.createRef();
  title = React.createRef();
  title2 = React.createRef();
  title3 = React.createRef();

  scrollTop = () => {
    window.scrollTo(0, 0);
  };

  componentDidMount() {
    this.handleScroll();
    setTimeout(this.scrollTop, 500);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { footer, aside, aside2, title, title2, title3 } = this;
    return (
      <footer ref={footer}>
        <a
          href="https://www.instagram.com/pracowniafryzjerska.beatapatej/"
          target="_blank"
          rel="noopener noreferrer"
          ref={aside}
          className="media"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/pracowniafryzjerskabeatapatejuk/"
          target="_blank"
          rel="noopener noreferrer"
          ref={aside2}
          className="media"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <section className="visit">
          <h3 ref={title} className="title">
            <span className="firstLetter">U</span>mów wizytę
          </h3>
          <section className="contact">
            <p>
              <i className="fas fa-phone-volume"></i>504 816 077
            </p>
          </section>
        </section>
        <section className="hours">
          <h3 ref={title2} className="title">
            <span className="firstLetter">G</span>odziny pracy
          </h3>
          <ul>
            <li>
              <span>Poniedziałek:</span> 09:00-17:00
            </li>
            <li>
              <span>Wtorek:</span> 09:00-19:00
            </li>
            <li>
              <span>Środa:</span> 09:00-17:00
            </li>
            <li>
              <span>Czwartek:</span> 9:00-19:00
            </li>
            <li>
              <span>Piątek:</span> 10:00-18:00
            </li>
            <li>
              <span>Sobota:</span> 08:00-14:00
            </li>
            <li>
              <span>Niedziela:</span> Nieczynne
            </li>
          </ul>
        </section>
        <section className="place">
          <h3 ref={title3} className="title place">
            <span className="firstLetter">J</span>ak dojechać?
          </h3>
          <h4>ul. Orzechowa 33B Biała Podlaska</h4>
          <iframe
            jsx-ally="map"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.8326413037253!2d23.143715015789184!3d52.02814647972414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472190d84182a933%3A0xceda46e5f60ef5a8!2sPracownia+Fryzjerska+Beata+Patejuk!5e0!3m2!1spl!2spl!4v1556474525223!5m2!1spl!2spl"
            allowFullScreen
          ></iframe>
        </section>
      </footer>
    );
  }
}

export default Footer;
