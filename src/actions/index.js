/* Actions Contact App */

/** Actions Type */
import {
  ADD_CONTACT,
  SEARCH_CONTACT,
  REMOVE_CONTACT,
  SHOW_CONTACT_LIST
} from "./typeActions.js";

/* Creator of actions */
const addContact = newContact => {
  return {
    type: ADD_CONTACT,
    newContact
  };
};

const searchContact = search => {
  return {
    type: SEARCH_CONTACT,
    search
  };
};

const removeContact = idContact => {
  return {
    type: REMOVE_CONTACT,
    idContact
  };
};

const showContacts = show => {
  return {
    type: SHOW_CONTACT_LIST,
    show
  };
};

/**
 *  LLamar una accion:
 *  dispatch(addContact(contact))
 */

export { addContact, searchContact, removeContact, showContacts };

/**
 * Nota: Las acciones describen algo que paso.
 */
