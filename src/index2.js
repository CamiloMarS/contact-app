import { addContact, searchContact, removeContact } from "./actions";
import store from "./store";
//searchContact
/** Mostrar el estado inicial de la app */
console.log(store.getState());

/** Cada vez que el estado cambie, se mostrará nuevamente
 *  subscribe(), devuelve una funcion para anular el registro del listener
 */

let unsubscribe = store.subscribe(() => {
  //...
  console.log("CAMBIO =>", store.getState());
});

/** Enviar algunas acciones */

//Agregar contacto
store.dispatch(
  addContact({ id: 1, name: "Camilo ", cellPhone: "24", active: true })
);
store.dispatch(
  addContact({ id: 2, name: "Iván ", cellPhone: "32", active: false })
);
store.dispatch(
  addContact({ id: 3, name: "Joshua", cellPhone: "100", active: true })
);
store.dispatch(
  addContact({ id: 10, name: "Pedro", cellPhone: "123456789", active: false })
);

//Eliminar contacto
store.dispatch(removeContact(2));

//Buscar un contacto
store.dispatch(searchContact("cAmIlO"));
store.dispatch(searchContact("joshua"));
store.dispatch(searchContact("Kevin"));

unsubscribe();
