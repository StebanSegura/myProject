import React, { Component } from 'react';
import Buscador from './Componentes/Buscador';
import Resultado from './Componentes/Resultado';

import './App.css';


class App extends Component {

  state = {
    termino : '',
    imagenes : []
  }

  consultarApi = () => {
    const url = 'https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=$';
    const parametro = this.state.termino;
    const enlace = url+parametro;
    fetch(enlace)
    .then(respuesta => respuesta.json() )
    .then(resultado => this.setState({ imagenes : resultado.hits}))

  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
    }, () => {
      this.consultarApi();
    })
  }

  render(){
    return (
      <div className="App">
        <header>
          <h1>MyProyect</h1>
          <p className="lead text-center">Buscador de Imagenes</p>
        </header>
        <div className="container">
        <div className="jumbotron">
          <Buscador 
          
          datosBusqueda={this.datosBusqueda}
          />
        </div>
        {this.state.termino}
        </div>
         <Resultado
         
         imagenes = {this.state.imagenes}
         />
      </div>
    );
  }
}

export default App;
