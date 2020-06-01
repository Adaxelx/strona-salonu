import React from "react";
import "Root/MainStyle.sass";
import img from "assets/images/salon.png";

const Home = () => {
  return (
    <section className="home">
      <img src={img} className="home__img" alt="" />
    </section>
  );
};

export default Home;
