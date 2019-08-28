import React from "react";

import img from "assets/img gallery/1.jpg";
import img2 from "assets/img gallery/2.jpg";
import img3 from "assets/img gallery/3.jpg";
import img4 from "assets/img gallery/4.jpg";
import img5 from "assets/img gallery/5.jpg";
import img6 from "assets/img gallery/6.jpg";
import img7 from "assets/img gallery/7.jpg";
import img8 from "assets/img gallery/8.jpg";
import img9 from "assets/img gallery/9.jpg";
import img10 from "assets/img gallery/10.jpg";
import img11 from "assets/img gallery/11.jpg";
import img12 from "assets/img gallery/12.jpg";
import img13 from "assets/img gallery/13.jpg";
import img14 from "assets/img gallery/14.jpg";
import img15 from "assets/img gallery/15.jpg";

let imgs = [
  img,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15
];
let imgRefs = [];

class Images extends React.Component {
  showImg = () => {
    const scrollV = window.scrollY;

    imgRefs.forEach(ref => {
      if (
        scrollV >
        ref.current.offsetTop -
          window.innerHeight +
          ref.current.offsetHeight / 2
      ) {
        ref.current.classList.add("active");
      }
    });
  };

  componentDidMount() {
    for (let i = 0; i < 15; i++) {
      imgRefs[i] = React.createRef();
    }
    window.addEventListener("scroll", this.showImg);
    setTimeout(this.showImg, 200);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.showImg);
  }

  render() {
    const images = imgs.map((img, i) => (
      <img ref={imgRefs[i]} src={img} key={img} alt="" />
    ));
    return <section className="images">{images}</section>;
  }
}

export default Images;
