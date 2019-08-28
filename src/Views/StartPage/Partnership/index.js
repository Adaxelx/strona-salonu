import React from "react";
import "Root/MainStyle.sass";

import logo from "assets/images/glynt.png";

class Partnership extends React.Component {
  state = {};

  handleScroll = () => {
    /* wysunięcie loga */

    const { item, container } = this;
    const scrollV = window.scrollY;

    if (
      scrollV >
      item.current.offsetTop -
        window.innerHeight +
        item.current.offsetHeight / 2
    ) {
      item.current.classList.add("active");
    } else {
      item.current.classList.remove("active");
    }
  };

  item = React.createRef();
  container = React.createRef();

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <aside ref={this.container} className="partnership">
        <h2>
          Pracujemy na najlepszej jakości kosmetykach marki{" "}
          <span>
            <span className="firstLetter">G</span>lynt
          </span>
        </h2>
        <img ref={this.item} src={logo} alt="" />
        <p>
          Kosmetyki firmy <span>Glynt</span> są w 100% oparte na wegańskich
          składnikach!
        </p>
      </aside>
    );
  }
}

export default Partnership;
