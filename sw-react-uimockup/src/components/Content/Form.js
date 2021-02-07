import React, { Component } from "react";
// styles
import "./form.css";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const team = {
      name: this.state.name
    };
    axios
      .post("https://sw-test-api.herokuapp.com/teams/", team)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="overlay">
        <div className="form">
          <div className="form-title"> CREATE NEW TEAM </div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Team Name:
              <input type="text" className="form-text" onChange={this.handleChange}></input>
            </label>
            <button type="submit">Add Team</button>
          </form>
          <button onClick={this.props.toggleForm}> Exit </button>
        </div>
      </div>
    );
  }
}

export default Form;
