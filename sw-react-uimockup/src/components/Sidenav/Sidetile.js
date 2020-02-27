import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
// styles
import "./sidetile.css";

class Sidetile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }
  setHover = () => this.setState({ hovered: true });
  cancelHover = () => this.setState({ hovered: false });

  render() {
    let logoSrc = this.props.logoSrc;
    let name = this.props.name;
    let style = this.props.style;

    return (
      <div className={style}>
        <Spring
          to={{
            transform: `scale(${this.state.hovered ? 1.15 : 1})`,
            opacity: this.state.hovered ? 0.5 : 1
          }}
          config={{ duration: 150 }}
        >
          {props => (
            <img
              src={logoSrc}
              alt={name}
              className="sidetile-logo"
              style={props}
              onMouseOver={this.setHover}
              onMouseOut={this.cancelHover}
            />
          )}
        </Spring>
      </div>
    );
  }
}

export default Sidetile;
