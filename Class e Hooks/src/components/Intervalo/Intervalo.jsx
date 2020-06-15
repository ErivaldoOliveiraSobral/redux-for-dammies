import React from 'react';
import './Intervalo.css';

import Card from "../Card/Card";

function handleMin(min, max) {
    if (min < max) return min
    else return max
}
function handleMax(max, min) {
    if (max > min) return max
    else return min
}

export default (props) => {
    const { min, max, onMinChange, onMaxChange } = props;
    return (
        <Card title="Intervalo de Números" red>
            <div className="intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} 
                        onChange={e => onMinChange(handleMin(parseInt(e.target.value), max))}
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} 
                        onChange={e => onMaxChange(handleMax(parseInt(e.target.value), min))}
                    />
                </span>
            </div>
        </Card>
    );
}