/* Actions Contact App */

/** Actions Type */
const ADD_CONTACT = "ADD_CONTACT";
const SEARCH_CONTACT = "SEARCH_CONTACT";
const REMOVE_CONTACT = "REMOVE_CONTACT";

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

/**
 *  LLamar una accion:
 *  dispatch(addContact(contact))
 */

export { addContact, searchContact, removeContact };

/**
 * Nota: Las acciones describen algo que paso.
 */
