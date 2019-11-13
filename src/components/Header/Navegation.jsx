import React, { Component } from "react";
import './styl.css'
import Carimg from './Carimg.jsx';

class Navegation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="https://www.google.com">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a
                className="nav-item nav-link active"
                href="https://www.google.com"
              >
                Home <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="https://www.google.com">
                Features
              </a>
              <a className="nav-item nav-link" href="https://www.google.com">
                Pricing
              </a>
            </div>
          </div>
        </nav>
        <Carimg/>
      </>
    );
  }
}

export default Navegation;
