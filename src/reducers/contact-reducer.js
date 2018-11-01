/**
 * Reducer principal de la aplicación, basandonos en los tipos de las acciones, se realizaran modificaciones
 * sobre el estado inicial.
 * ==> Lo mejor es hacer composicion de reducers
 */

import initialState from "../state"; //Estado inicialde la aplicacion
//import { makeActionCreator } from "redux-toolbelt"; //Reduce el código de reducers

import {
  ADD_CONTACT,
  SEARCH_CONTACT,
  REMOVE_CONTACT,
  OPEN_MODAL_FORM
} from "../actions/typeActions";

/* El "reducer" recibe el estado inicial y la accion a ejecutar */

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT: {
      // Crear un nuevo contacto
      return Object.assign({}, state, {
        contacts: [...state.contacts, { ...action.newContact }]
      });
    }

    case SEARCH_CONTACT: {
      // Buscar el id
      return Object.assign({}, state, {
        search: action.search,
        result: state.contacts.filter(contact => {
          return contact.name
            .toLowerCase()
            .includes(action.search.toLowerCase());
        })
      });
    }
    case REMOVE_CONTACT: {
      return Object.assign({}, state, {
        contacts: state.contacts.filter(contact => {
          //... Eliminar el elemento coincidente...
          return contact.id !== action.idContact;
        })
      });
    }
    case OPEN_MODAL_FORM: {
      return Object.assign({}, state, {
        ui: {
          openForm: action.open
        }
      });
    }
    default: {
      /** Por defecto retornar el estado */
      return state;
    }
  }
};

export default contactReducer;

/**
 * Nota: Los reducers especifican como cambio el estado de la aplicacion en respuesta a una accion.
 * CombineReducers, hacer un unico reducer
 */

/*
  * Inmutable.js 
*/
