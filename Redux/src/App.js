import React from 'react';
import { connect } from "react-redux";
import './App.css';

import Intervalo from "./components/Intervalo/Intervalo";
import Media from "./components/Resultados/Media";
import Soma from "./components/Resultados/Soma";
import Sorteio from "./components/Resultados/Sorteio";
import ChangeTitle from "./components/ChangeTitle/ChangeTitle";

const App = (props) => {
  return (
    <div className="App">
      <h1>{props.appTitle}</h1>
      <div className="linha">
        <Intervalo/>
      </div>
      <div className="linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>
      <div className="linha">
        <ChangeTitle />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  appTitle: state.nomes.appTitle
})

export default connect(mapStateToProps)(App);
