import React from "react";
import PropTypes from 'prop-types';

const Card = ({img,text, title}) =>{
    return (
        <div className=" col-sm-16 mx-2 my-3">
            <div className="card" style={{width: '18rem'}}>
                <img src={img} className="card-img-top img-thumbnail" alt={title} style={{height:"13rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">Card title: {title}</h5>
                    <p className="card-text">Texto: {text}</p>
                    <a href="10.0.0.9:3000" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
  }

Card.propTypes={
    img: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string
}
Card.defaultProps={
    img: "error",
    text: "error",
    title: "Error"
}

export default Card;
