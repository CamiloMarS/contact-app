/* CREAR EL REDUCER CON REDUX-TOOLNELT */

import initialState from "../state";
import { makeReducer } from "redux-toolbelt";
import {
  addContact,
  searchContact,
  removeContact,
  openForm
} from "../actions/toolbelt";

const contactReducer = makeReducer(
  {
    [addContact.TYPE]: (state, { payload }) => {
      //Crear un nuevo contacto
      console.log("TOOLBELT NEW  ==> ", payload);
      return Object.assign({}, state, {
        contacts: [...state.contacts, { ...payload.newContact }]
      });
    },
    [removeContact.TYPE]: (state, { payload }) => {
      //Eliminar un contacto
      console.log("TOOLBELT REMOVE ==>", payload);

      return Object.assign({}, state, {
        contacts: state.contacts.filter(contact => {
          return contact.id !== payload;
        })
      });
    },
    [searchContact.TYPE]: (state, { payload }) => {
      //Buscar el contacto
      console.log("TOOLBELT SEARCH ==>", payload);
      if (payload.search !== "") {
        return Object.assign({}, state, {
          search: payload,
          result: state.contacts.filter(contact => {
            return contact.name
              .toLowerCase()
              .includes(payload.search.toLowerCase());
          })
        });
      } else return { ...state, search: "", result: [] };
    },
    [openForm.TYPE]: (state, { payload }) => {
      //Abrir/Cerrar la modal del formulario
      console.log("TOOLBELT OPEN-FORM ==>", payload);
      return Object.assign({}, state, {
        ui: {
          openForm: payload.open
        }
      });
    }
  },
  { defaultState: initialState } //Estado por defecto
);

export default contactReducer;
