import React, { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      mai: "",
      fecha: new Date()
    };
    this.CUser = this.CUser.bind(this);
    this.CMail = this.CMail.bind(this);
    this.CFecha = this.CFecha.bind(this);
  }

  CFecha(e) {
    this.setState({
      fecha: new Date()
    });
  }

  CUser(e) {
    this.setState({
      user: e.target.value
    });
  }

  CMail(e) {
    this.setState({
      mai: e.target.value
    });
  }
  render() {
    return (
      <div className="container">
        <form className="form-group">
          <h4>Fecha: {Math.ceil(this.state.fecha / 1000)}</h4>
          <input
            type="text"
            name="User"
            id="User"
            placeholder="User"
            className="form-control my-2"
            onChange={this.CUser}
          />
          <input
            type="text"
            name="Mail"
            id="Mail"
            placeholder="Email"
            className="form-control"
            onChange={this.CMail}
          />
        </form>
        <h1>User: {this.state.user}</h1>
        <h1>Mail: {this.state.mai}</h1>
      </div>
    );
  }
  componentDidMount() {
    this.intervaloFecha = setInterval(() => {
      this.CFecha();
    }, 1000);
  }
}

export default Form;
