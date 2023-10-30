import React, { Component } from "react";

const imagenes = [
    "../img/img1.jpg",
    "../img/img2.jpg",
    "../img/img3.jpg",
    "../img/img4.jpg",
];
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c: 0,
    };
  }
  state = {
    c: 0,
  };
  render() {
    setTimeout(
      () =>
        this.setState({
          c: Math.floor(Math.random() * imagenes.length),
        }),
      1500
    );
    return(
      <div>
        <h1 className="tit">Tradiciones culturales del Perú</h1>
        <img className="imgcab" src={imagenes[this.state.c]} alt="imagen" />
      </div>
    );
  }
}
export default Header;
