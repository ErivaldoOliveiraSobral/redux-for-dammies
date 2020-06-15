import React from 'react';
import './Resultados.css';

import Card from "../Card/Card";

export default (props) => {
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