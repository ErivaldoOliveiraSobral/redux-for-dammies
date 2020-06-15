import { createStore, combineReducers } from "redux";

import { numeros } from "./reducers/numeros";
import { nomes } from "./reducers/nomes";

const reducers = combineReducers({
    numeros,
    nomes
});

const storeConfig = () => {
    return createStore(reducers);
}

export default storeConfig;