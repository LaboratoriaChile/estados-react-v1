import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title/Title';
import Formulario from './components/Formulario/Formulario';
import Button from './components/Button/Button';

class App extends Component {
    render() {
        return (
          <div>
              <h1>Hola antiguo</h1>
              <Title nombre="Ely" />
              <Title nombre="Mia" />
              <Title nombre="Sofi" />
              <Formulario />
              <Button/>
          </div>
        );
    }
}

export default App;