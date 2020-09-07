import React, { Component } from "react";
import Notas from "../Notas/Notas";
import "./style.css";
export class ListaNotas extends Component 
{
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <Notas titulo={nota.titulo} texto={nota.texto}/>
            </li>
          );
        })}
      </ul>
    );
  }
}
