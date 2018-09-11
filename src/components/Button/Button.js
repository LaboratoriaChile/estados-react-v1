import React, { Component } from 'react';

class Button extends Component {

  constructor(){
    super();

    this.state = {
      saludar: ' Ale la maravillosa'
    }
  }

  render() {
    return (
      <div>
        <p>Hola {this.state.saludar}</p>
        <button onClick={this.saludar.bind(this)}>Click</button>
      </div>
    )
  }

  saludar() {
    this.setState({
      saludar: ' maravillosas reacters <3'
    })
  }

}

export default Button;