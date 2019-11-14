import React, { Component } from "react";
import './style/style.css'
import { Link } from 'react-router-dom';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
              <Link className="navbar-brand" to="/">
                Navbar
              </Link>
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
                  <Link
                    className="nav-item nav-link active"
                    to="/"
                  >
                    Home <span className="sr-only">(current)</span>
                  </Link>
                  <Link className="nav-item nav-link" to="/cursos">
                    Features
                  </Link>
                  <Link className="nav-item nav-link" to="https://www.google.com">
                    Pricing
                  </Link>
                </div>
              </div>
            </nav>
        
      </>
    );
  }
}

export default Nav;