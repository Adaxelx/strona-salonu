import React from "react";

class Contact extends React.Component {
  title = React.createRef();
  handleScroll = () => {
    /* wysunięcie loga */

    const scrollV = window.scrollY;
    if (
      scrollV >
      this.title.current.offsetTop +
        this.title.current.offsetHeight * 2 -
        window.innerHeight
    ) {
      this.title.current.classList.add("active");
    } else {
      this.title.current.classList.remove("active");
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { title, container } = this;
    return (
      <>
        <article ref={container} className="contact">
          <section className="contactSection">
            <h2 ref={title} className="title">
              <span className="firstLetter">U</span>mów się!
            </h2>
            <section className="contactTypes">
              <h3 className="subtitle">Możesz to zrobić poprzez:</h3>
              <p className="telephoneNumer">
                <i className="fas fa-mobile-alt"></i> 504 816 077
              </p>
              <aside>
                <span>Ważne!</span> Proszę dzwonić tylko w godzinach pracy
                (podane w sekcji poniżej).
              </aside>
            </section>
          </section>
        </article>
      </>
    );
  }
}

export default Contact;
