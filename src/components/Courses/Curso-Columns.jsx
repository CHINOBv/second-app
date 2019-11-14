import React from "react";
import Curso from "./Curso-card.jsx";

import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

const curso = [
  {
      id:1,
    img: img1,
    title: "GitHub",
    text: "Este es mi Repositorio de Github"
  },
  {
      id:2,
    img: img2,
    title: "Titulo 2",
    text: "texto 2"
  },
  {
      id:3,
    img: img3,
    title: "Titulo 3",
    text: "texto 3"
  },
  {
      id:4,
    img: img3,
    title: "Titulo 4",
    text: "texto 4"
  }
];

const CursoColumns = () => {
  return (
    <div className="row flex-d justify-content-center">
      {curso.map(c => (
        <Curso img={c.img} id={c.id} text={c.text} title={c.title} />
      ))}
    </div>
  );
};

export default CursoColumns;
