import React from 'react';
import { connect } from "react-redux";
import './Resultados.css';

import Card from "../Card/Card";

const Media = (props) => {
    const { min, max } = props;
    return (
        <Card title="Média dos Números" green>
            <div className="resultados">
                <span>
                    <span>Resultado:</span>
                    <strong>{(min + max) / 2}</strong>
                </span>
            </div>
        </Card>
    );
}

const mapStateToProps = (state) => ({
    min: state.numeros.min,
    max: state.numeros.max
});

export default connect(mapStateToProps)(Media);