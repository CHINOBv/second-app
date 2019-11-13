import React, { Component } from 'react';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user:"",
            mai:""
        };
        this.CUser = this.CUser.bind(this);
        this.CMail = this.CMail.bind(this);
    }

    CUser (e){
        this.setState({
            user: e.target.value
        })
    }


    CMail (e){
        this.setState({
            mai: e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <form className="form-group">
                    <input type="text" name="User" id="User" placeholder="User" className="form-control my-2" onChange={this.CUser}/>
                    <input type="text" name="Mail" id="Mail" placeholder="Email" className="form-control" onChange={this.CMail}/>
                </form>
                <h1>User: {this.state.user}</h1>
                <h1>Mail: {this.state.mai}</h1>
            </div>
        );
    }
}

export default Form;