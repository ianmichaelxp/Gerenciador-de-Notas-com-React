import React, { Component } from "react";
import "./style.css";
export class FormularioCadastro extends Component 
{

  constructor(props)
  {
    super(props);/* vem de formulárioCadastro*/
    this.titulo = "";
    this.texto = "";
  }


  _handleMudancaTitulo(evento)
  {
    this.titulo = evento.target.value;
    console.log(evento.target.value);
  }
  _handleMudancaTexto(evento)
  {
    this.texto = evento.target.value;
    console.log(evento.target.value);
  }

  _criarNota(evento)
  {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto)
    console.log(`uma nova nota foi criada ${this.titulo}: ${this.texto}`);
  }

  render() 
  {
    return (
      <form className="form-cadastro " onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this/*Formulário Cadastro*/)}
        />
        <textarea
          rows={10}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}
