import { createStore } from "redux"; //Metodo de redux para crear el store
import contactReducer from "./reducers/contact-reducer"; //Importar el reducer

//Crear el store
const store = createStore(contactReducer);

export default store;
