import { TITLE_UPDATED } from "../actions/actionTypes";

const initialState = { appTitle: "Exercício React/Redux" };

export const nomes = (state, action) => {
    switch (action.type) {
        case TITLE_UPDATED:
            return { ...state, appTitle: action.payload };
        default:
            return initialState;
    }
}