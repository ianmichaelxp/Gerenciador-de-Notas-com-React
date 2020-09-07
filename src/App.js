import React, { Component } from "react";
import { ListaNotas } from "./components/ListaNotas/ListaNotas";
import { FormularioCadastro } from "./components/FormularioCadastro/FormularioCadastro";
import "./assets/style.css"

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.notas=[];
  }
  criarNota(titulo, texto)
  {
    const nota = { titulo, texto };
    this.notas.push(nota);
  }

  render() 
  {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaNotas notas={this.notas} />
      </section>
    );
  }
}

export default App;
