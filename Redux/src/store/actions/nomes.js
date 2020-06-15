import { TITLE_UPDATED } from "./actionTypes";

export const tituloAlterado = (novoTitulo) => {
    return {
        type: TITLE_UPDATED,
        payload: novoTitulo
    }
}