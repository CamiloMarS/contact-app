import { makeActionCreator } from "redux-toolbelt";

/**
 * CREAR LAS ACCIONES USANDO REDUX-TOOLBELT
 */

const addContact = makeActionCreator("ADD_CONTACT");
const searchContact = makeActionCreator("SEARCH_CONTACT");
const removeContact = makeActionCreator("REMOVE_CONTACT");
const showContact = makeActionCreator("SHOW_CONTACT");
const openForm = makeActionCreator("OPEN_MODAL_FORM");

/**
 * Exportar las acciones
 */
export { addContact, searchContact, removeContact, showContact, openForm };
