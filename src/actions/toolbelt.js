import { makeActionCreator } from "redux-toolbelt";

/**
 * CREAR LAS ACCIONES USANDO REDUX-TOOLBELT
 * Por defecto las acciones con Redux-Toolbelt, tienen una propiedad: Type, payload y meta
 */

const addContact = makeActionCreator(
  "ADD_CONTACT",
  (newContact, debug = false) => ({
    payload: { newContact },
    meta: { debug }
  })
);

const searchContact = makeActionCreator(
  "SEARCH_CONTACT",
  (search, debug = false) => ({
    payload: { search },
    meta: { debug }
  })
);

const removeContact = makeActionCreator(
  "REMOVE_CONTACT",
  (idContact, debug = false) => ({
    payload: idContact,
    meta: { debug }
  })
);
const showContact = makeActionCreator(
  "SHOW_CONTACT",
  (show, debug = false) => ({
    payload: show,
    meta: debug
  })
);
const openForm = makeActionCreator(
  "OPEN_MODAL_FORM",
  (open, debug = false) => ({
    payload: { open },
    meta: { debug }
  })
);

/**
 * Exportar las acciones
 */
export { addContact, searchContact, removeContact, showContact, openForm };
