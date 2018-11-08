/* CREAR EL REDUCER CON REDUX-TOOLNELT */

import initialState from "../state";
import { makeReducer } from "redux-toolbelt";
import {
  addContact,
  searchContact,
  removeContact,
  openForm,
  viewDetailsContact,
  getConversationContact,
  sendMessage,
  deleteConversation
} from "../actions/toolbelt";

const contactReducer = makeReducer(
  {
    [addContact.TYPE]: (state, { payload }) => {
      //Crear un nuevo contacto
      return Object.assign({}, state, {
        contacts: [...state.contacts, { ...payload.newContact }]
      });
    },
    [removeContact.TYPE]: (state, { payload }) => {
      //Eliminar un contacto
      return Object.assign({}, state, {
        contacts: state.contacts.filter(contact => {
          return contact.id !== payload;
        })
      });
    },
    [searchContact.TYPE]: (state, { payload }) => {
      //Buscar el contacto
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
      return Object.assign({}, state, {
        ui: {
          openForm: payload.open
        }
      });
    },
    [viewDetailsContact.TYPE]: (state, { payload }) => {
      const { id, name, cellphone } = payload.contact;
      return Object.assign({}, state, {
        conversationActive: {
          contact: {
            id: id,
            name: name,
            cellphone: cellphone
          }
        }
      });
    },
    [getConversationContact.TYPE]: (state, { payload }) => {
      let id = payload["idContact"];
      const existsConversationTheContact = state.conversations.hasOwnProperty(
        id
      );
      if (existsConversationTheContact) {
        return Object.assign({}, state, {
          ...state,
          conversationActive: {
            contact: {
              ...state.conversationActive.contact,
              messages: state.conversations[`${id}`].history
            }
          }
        });
      } else {
        return state;
      }
    },
    [sendMessage.TYPE]: (state, { payload }) => {
      const { destiny, contactName, text, type, when } = payload;
      if (state.conversations.hasOwnProperty(destiny)) {
        //agregar el mensaje a la conversación existente
        return Object.assign({}, state, {
          conversations: {
            ...state.conversations,
            [destiny]: {
              history: [
                ...state.conversations[destiny].history,
                { type, contactName, text, when }
              ]
            }
          }
        });
      } else {
        //Iniciar una nueva conversación
        return {
          ...state,
          conversations: {
            ...state.conversations,
            [destiny]: {
              history: [{ type, contactName, text, when }]
            }
          }
        };
      }
    },
    [deleteConversation.TYPE]: (state, { payload }) => {
      //Recorrer la lista de conversaciones y excluir la que se quiera eliminar
      const { idContact } = payload;
      delete state.conversations[idContact];
      return {
        ...state,
        conversations: {
          ...state.conversations
        }
      };
    }
  },
  { defaultState: initialState } //Estado por defecto
);

export default contactReducer;
