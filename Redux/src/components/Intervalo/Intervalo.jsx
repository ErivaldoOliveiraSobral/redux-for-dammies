import React from 'react';
import { connect } from "react-redux";
import { minimoAlterado, maximoAlterado } from "../../store/actions/numeros";
import './Intervalo.css';

import Card from "../Card/Card";

const Intervalo = (props) => {
    const { min, max, handleMinimoAlterado, handleMaximoAlterado } = props;
    return (
        <Card title="Intervalo de Números" red>
            <div className="intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min}
                        onChange={e => handleMinimoAlterado(parseInt(e.target.value))}
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max}
                        onChange={e => handleMaximoAlterado(parseInt(e.target.value))}
                    />
                </span>
            </div>
        </Card>
    );
}

const mapStateToProps = (state) => ({
    min: state.numeros.min,
    max: state.numeros.max
});

const mapDispatchToProps = (dispatch) => ({
    handleMinimoAlterado(novoNumero) {
        dispatch(minimoAlterado(novoNumero));
    },
    handleMaximoAlterado(novoNumero) {
        dispatch(maximoAlterado(novoNumero));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);