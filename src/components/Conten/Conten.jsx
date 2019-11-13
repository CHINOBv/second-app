import React, { Component } from "react";
import Grid from "../Grid/Grid.jsx";
import Form from "./Form/Form.jsx";

class Conten extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: "forms"
    };
  }
  render() {
    return (
      <>
        <Grid />
        <hr /> <h1 className="my-5">Formulario: {this.state.form}</h1>
        <Form />
      </>
    );
  }
}

export default Conten;
