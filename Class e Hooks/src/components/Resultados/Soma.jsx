import React from 'react';
import './Resultados.css';

import Card from "../Card/Card";

export default (props) => {
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