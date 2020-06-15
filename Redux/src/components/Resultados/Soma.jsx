import React from 'react';
import { connect } from "react-redux";
import './Resultados.css';

import Card from "../Card/Card";

const Soma = (props) => {
    const { min, max } = props;
    return (
        <Card title="Soma dos Números" blue>
            <div className="resultados">
                <span>
                    <span>Resultado:</span>
                    <strong>{min + max}</strong>
                </span>
            </div>
        </Card>
    );
}

const mapStateToProps = (state) => ({
    min: state.numeros.min,
    max: state.numeros.max
});

export default connect(mapStateToProps)(Soma);