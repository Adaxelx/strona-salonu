import React from "react";
import Home from "Views/StartPage/Home";
import Offer from "Views/StartPage/Offer";
import Footer from "Components/Footer";
import "Root/MainStyle.sass";
import Partnership from "Views/StartPage/Partnership";

class StartPage extends React.Component {
  state = {};

  scrollTop = () => {
    window.scrollTo(0, 0);
  };

  componentDidMount() {
    setTimeout(this.scrollTop, 500);
  }

  render() {
    return (
      <article className="startPage">
        <Home />
        <Offer />
        <Partnership />
        <Footer />
      </article>
    );
  }
}

export default StartPage;
