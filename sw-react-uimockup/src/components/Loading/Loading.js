import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
// styles
import "./loading.css";
// assets
import LoadingGIF from "../../assets/Loading/chemical-loading-gif.gif";

class Loading extends Component {
  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{duration:1000}}>
        {props => (
          <div style={props}>
            <img src={LoadingGIF} alt="Loading" className="loading" />
          </div>
        )}
      </Spring>
    );
  }
}

export default Loading;
