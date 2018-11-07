/* CREAR EL REDUCER CON REDUX-TOOLNELT */

import initialState from "../state";
import { makeReducer } from "redux-toolbelt";
import {
  addContact,
  searchContact,
  removeContact,
  openForm,
  viewDetailsContact
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
    },
    [viewDetailsContact.TYPE]: (state, { payload }) => {
      console.log("TOOLBELT VIEW DETAILS ==> ", payload);
      return Object.assign({}, state, {
        conversation: {
          contact: {
            name: payload.name,
            cellphone: payload.cellphone,
            messages: [...payload.messages]
          }
        }
      });
    }
  },
  { defaultState: initialState } //Estado por defecto
);

export default contactReducer;
