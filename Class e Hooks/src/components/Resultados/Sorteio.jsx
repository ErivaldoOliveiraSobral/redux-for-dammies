import React from 'react';
import './Resultados.css';

import Card from "../Card/Card";

export default (props) => {
    const { min, max } = props;
    const result = parseInt((Math.random() * (max - min)) + min);
    return (
        <Card title="Sorteio de um número" purple>
            <div className="resultados">
                <span>
                    <span>Resultado:</span>
                    <strong>{result}</strong>
                </span>
            </div>
        </Card>
    );
}