/**
 * CREAR EL REDUCER CON REDUX-TOOLNELT
 */

import initialState from "../state";
//import { makeReducer } from "redux-toolbelt";

import {
  addContact,
  searchContact,
  removeContact,
  openForm
} from "../actions/toolbelt";

const contactReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    //Add new contact
    case addContact.TYPE: {
      return Object.assign({}, state, {
        contacts: [...state.contacts, { ...payload }]
      });
    }
    //Return the world to search and the result if exists
    case searchContact.TYPE: {
      return Object.assign({}, state, {
        search: payload.search,
        result: state.contacts.filter(contact => {
          return contact.name
            .toLowerCase()
            .includes(payload.search.toLowerCase());
        })
      });
    }
    //Remove the contact searched
    case removeContact.TYPE: {
      return Object.assign({}, state, {
        //Ignorar el contacto que tenga el id buscado
        contacts: state.contacts.filter(contact => {
          return contact.id !== payload.idContact;
        })
      });
    }
    //Open the modal
    case openForm.TYPE: {
      return Object.assign({}, state, {
        ui: {
          openForm: payload.open
        }
      });
    }

    //Return the state initial
    default: {
      return state;
    }
  } //end switch
}; //end reducer
export default { contactReducer };
