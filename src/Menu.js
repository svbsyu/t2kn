import React, { Component } from "react";

const items = new Array(
  "Index",
  "Tradiciones",
  "Costumbres",
  "Museos",
  "Contacto"
);

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: items.map((it) => <a className="item" href="#">{it}</a>),
    };
  }
  state = {
    lista: new Array(),
  };
  render() {
    return <div>{this.state.lista}</div>;
  }
}
export default Menu;
