import React from 'react';
import Nav from '../Nav/Nav.jsx'
import Cursos from "../Courses/Curso-Columns"
import ImgCont from './ImgCont.jsx'

const Home = ()=>{
    return(
        <>
            <Nav/>
            <ImgCont/>
            <Cursos/>
            <h1>hola its a Home</h1>
        </>
    )
}

export default Home;