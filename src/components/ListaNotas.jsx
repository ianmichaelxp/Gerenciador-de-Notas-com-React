import React, { Component } from "react";
import Notas from "./Notas";
export class ListaNotas extends Component {
  render() {
    return (
      <ul>
        <li>
          <Notas/>
        </li>
        <li>
          <Notas/>
        </li>
        <li>
          <Notas/>
        </li>
      </ul>
    );
  }
}
