import React from "react";
import "Root/MainStyle.sass";

class Offer extends React.Component {
  handleScroll = () => {
    const scrollY = window.scrollY;
    if (
      scrollY >
      this.title.current.offsetTop +
        this.title.current.offsetHeight * 2 -
        window.innerHeight
    ) {
      this.title.current.classList.add("offer__title--active");
    }
  };

  title = React.createRef();

  componentDidMount() {
    // this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <main className="offer">
        <h1 ref={this.title} className="offer__title">
          <span className="firstLetter">N</span>asza oferta
        </h1>
        <h2 className="offer__subtitle">
          O ceny można dopytać się podczas rozmowy telefonicznej
        </h2>
        <section className="priceList">
          <div className="priceList__service">
            <p className="priceList__subtitle">Męskie</p>
            <p>Strzyżenie męskie</p>
            <p>Strzyżenie męskie + broda</p>
            <p>Strzyżenie męskie z myciem</p>
            <p>Cover dla mężczyzn</p>
            <p className="priceList__subtitle">Damskie</p>
            <p>Strzyżenie damskie</p>
            <p>Strzyżenie grzywki</p>
            <p>Strzyżenie Split-Ender</p>
            <p>Modelowanie</p>
            <p>Prostowanie pielęgnacyjne</p>
            <p className="priceList__subtitle">Zabiegi</p>
            <p>TRI JUVEN do koloryzacji</p>
            <p>EPLEX do koloryzacji</p>
            <p>Zabieg laminacji</p>
            <p>Zabieg Thermo keratin</p>
            <p>Zabieg Q3</p>
            <p>Zabieg lab</p>
            <p>Zabieg BOTOX na włosy</p>
            <p className="priceList__subtitle">Koloryzacja</p>
            <p>Koloryzacja</p>
            <p>Koloryzacja + strzyżenie</p>
            <p>Koloryzacja + strzyżenie + modelowanie</p>
            <p>Baleyage</p>
            <p>Baleyage + strzyżenie</p>
            <p>Baleyage + toner + strzyżenie</p>
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
            <p className="priceList__subtitle">Upięcia</p>
            <p>Upięcie okolicznościowe</p>
            <p>Upięcie ślubne</p>
            <p>Upięcie próbne</p>
          </div>
        </section>
      </main>
    );
  }
}

export default Offer;
