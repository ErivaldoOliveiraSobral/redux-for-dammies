import React, { useState } from 'react';
import './App.css';

import Intervalo from "./components/Intervalo/Intervalo";
import Media from "./components/Resultados/Media";
import Soma from "./components/Resultados/Soma";
import Sorteio from "./components/Resultados/Sorteio";

export class AppClass extends React.Component {
  // State
  state = {
    minimo: 0,
    maximo: 10
  }

  // Handles
  handleMin = (min) => {
    this.setState({ minimo: min });
  }
  handleMax = (max) => {
    this.setState({ maximo: max });
  }

  render() {
    return (
      <div className="App">
        <h1>Exercício React Redux (Class)</h1>
        <div className="linha">
          <Intervalo min={this.state.minimo} max={this.state.maximo}
            onMinChange={this.handleMin}
            onMaxChange={this.handleMax}
          />
        </div>
        <div className="linha">
          <Media min={this.state.minimo} max={this.state.maximo} />
          <Soma min={this.state.minimo} max={this.state.maximo} />
          <Sorteio min={this.state.minimo} max={this.state.maximo} />
        </div>

      </div>
    );
  }
}

export function App() {
  // Hooks
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(10)

  return (
    <div className="App">
      <h1>Exercício React Redux (Hooks)</h1>
      <div className="linha">
        <Intervalo min={min} max={max}
          onMinChange={setMin}
          onMaxChange={setMax}
        />
      </div>
      <div className="linha">
        <Media min={min} max={max} />
        <Soma min={min} max={max} />
        <Sorteio min={min} max={max} />
      </div>
    </div>
  );
}