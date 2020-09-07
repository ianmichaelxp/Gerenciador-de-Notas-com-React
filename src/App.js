import React, { Component } from "react";
import { ListaNotas } from "./components/ListaNotas/ListaNotas";
import { FormularioCadastro } from "./components/FormularioCadastro/FormularioCadastro";
import "./assets/style.css"

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state={  notas:[] };
  }
  criarNota(titulo, texto)
  {
    const nota = { titulo, texto };
    const arrayNotas = [...this.state.notas, nota];
    const novoState = { notas: arrayNotas };
    this.setState(novoState)
  }

  render() 
  {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
