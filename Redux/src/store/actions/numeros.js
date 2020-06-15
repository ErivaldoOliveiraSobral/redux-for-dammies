// Action Creator

import {  
    NUM_MIN_ALTERADO,
    NUM_MAX_ALTERADO
} from "./actionTypes";

export const minimoAlterado = (novoNumero) => { 
    return { 
        type: NUM_MIN_ALTERADO, 
        payload: novoNumero 
    }
}

export function maximoAlterado(novoNumero) {
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
};