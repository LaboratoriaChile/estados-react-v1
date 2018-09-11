import React, { Component } from 'react';

class Formulario extends Component {
  constructor() {
    super();

    this.state = {
      nombre: ''
    }
    // this.saludar = this.saludar.bind(this)
  }
  
  render(){
    return (
      <div>
        <p>Hola {this.state.nombre}</p>
        <input type="text" onChange={this.actualizarNombre.bind(this)}/>
        <button onClick={this.saludar.bind(this)}>Saludar</button>
      </div>
    )
  }

  saludar() {
    console.log(this.state)
    alert(this.state.nombre)
  }

  actualizarNombre(evento) {
    this.setState({
      nombre: evento.target.value
    })
  }

}

export default Formulario;