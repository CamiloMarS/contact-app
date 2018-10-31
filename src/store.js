import { createStore } from "redux"; //Metodo de redux para crear el store
import contactReducer from "./reducers/contact-reducer"; //Importar el reducer
import { composeWithDevTools } from "redux-devtools-extension";

//Crear el store
const store = createStore(contactReducer, composeWithDevTools());

export default store;

/**
 * Nota: Me faulto usar combine recuducer
 */
