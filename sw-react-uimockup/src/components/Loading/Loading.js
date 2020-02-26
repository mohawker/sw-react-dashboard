import React, { Component } from "react";
import "./loading.css";
import LoadingGIF from "../../assets/Loading/chemical-loading-gif.gif";

class Loading extends Component {
  render() {
    return <img src={LoadingGIF} alt="Loading" className="loading" />;
  }
}

export default Loading;
