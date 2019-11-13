import React, { Component } from "react";
import Cards from "../Conten/Cards/Card.jsx";

import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

const cards = [
  {
    id: 1,
    img: img1,
    text: "Texto 1 para demo",
    title: "Titulo 1"
  },
  {
    id: 2,
    img: img2,
    text: "Texto 2 para demo",
    title: "Titulo 2"
  },
  {
    id: 3,
    img: img3,
    text: "Texto 3 para demo",
    title: "Titulo3"
  }
];

class Grid extends Component {
  state = {};
  render() {
    return (
      <div className="row flex-d justify-content-center">
        {cards.map(cards => (
          <Cards
            img={cards.img}
            title={cards.title}
            text={cards.text}
            id={cards.id}
          />
        ))}
      </div>
    );
  }
}

export default Grid;
