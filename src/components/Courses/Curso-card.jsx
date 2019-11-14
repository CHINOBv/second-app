import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CCurso = ({img,text, title,id}) =>{
    return (
        <div className=" col-sm-16 mx-2 my-3">
            <div className="card" style={{width: '18rem'}}>
                <img src={img} className="card-img-top img-thumbnail" alt={title} style={{height:"13rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">Curso: {title}</h5>
                    <p className="card-text">Texto: {text}</p>
                    <Link to={`/cursos/${id}`} className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>
    )
  }

CCurso.propTypes={
    img: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string
}
CCurso.defaultProps={
    img: "error",
    text: "error",
    title: "Error"
}

export default CCurso;