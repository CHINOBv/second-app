import React from "react";
import PropTypes from "prop-types";

import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

const card = [
  {
    id: 1,
    img: img1,
    title: "Titulo de Card 1",
    text: "esto es el texto del card 1 ejmfoirejgnruoihgowrjfrouegreigreuijio"
  },
  {
    id: 2,
    img: img2,
    title: "Titulo de Card 1",
    text: "esto es el texto del card 1 ejmfoirejgnruoihgowrjfrouegreigreuijio"
  },
  {
    id: 3,
    img: img3,
    title: "Titulo de Card 1",
    text: "esto es el texto del card 1 ejmfoirejgnruoihgowrjfrouegreigreuijio"
  }
];

const Card = ({ match }) => {
  const Actual = card.filter(card => card.id === parseInt(match.params.id))[0];

  return Actual ? (
    <div className="card bg-dark text-white">
      <img src={Actual.img} className="card-img" alt={Actual.title} />
      <div className="card-img-overlay">
        <h5 className="card-title">Card title{Actual.title}</h5>
        <p className="card-text">{Actual.text}</p>
        <p className="card-text">Last updated 3 mins ago</p>
      </div>
    </div>
  ) : (
      <><hr/>
      <hr/>
    <h1>Error UnDefine</h1>
    </>
  );
};
Card.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string
};
Card.defaultPropTypes = {
  img: "Error UnDefine",
  text: "Error UnDefine",
  title: "Error UnDefine"
};
export default Card;