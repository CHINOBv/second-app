import React from 'react';
import Card from './Cards/Card.jsx'
import Form from './Form/Form.jsx'

import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'

const cards = [
    {
        img: img1,
        text: "Texto 1 para demo",
        title: "Titulo 1"
    },
    {
        img: img2,
        text: "Texto 2 para demo",
        title: "Titulo 2"
    },
    {
        img: img3,
        text: "Texto 3 para demo",
        title: "Titulo3"
    }

];

const Conten = () => {
    return (
        <>
            <div className="row flex-d justify-content-center">
            {cards.map (cards=>(
                <Card img={cards.img} text={cards.text} title={cards.title}/>
            ))}
            </div>
            <hr/> <h1 className="my-5">Formulario</h1>
            <Form/>
        </>
    );
}

export default Conten;