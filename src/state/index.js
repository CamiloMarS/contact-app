/**
 * General state for all application
 */

/**
 * formato de los mensajes
 *     {
      //..
      contactId: 0,
      contactName: "",
      text: "",
      when: ""
    }
 *
 * 
 */
const initialState = {
  contacts: [],
  search: "",
  result: [],
  conversationActive: {
    contact: {
      id: 0,
      name: "",
      cellphone: "",
      messages: {}
    }
  },
  conversations: {
    8: {
      history: [
        {
          type: "destiny",
          contactName: "Andrea",
          text: "Blabla",
          when: "Wed Nov 07 2018 10:56:46 GMT-0600"
        },
        {
          type: "origin",
          contactName: "Camilo",
          text: "Bla bla x2",
          when: "Wed Nov 07 2018 11:09:46 GMT-0600"
        }
      ]
    },
    6: {
      history: [
        {
          type: "destiny",
          contactName: "Alejandra",
          text: "Hola, este es un día chido!",
          when: "Wed Nov 07 2018 10:56:46 GMT-0600"
        },
        {
          type: "origin",
          contactName: "Camilo",
          text: "Así es, el cielo esta despejado.",
          when: "Wed Nov 07 2018 11:09:46 GMT-0600"
        }
      ]
    }
  },
  //store para interfaces de usario
  ui: {
    openForm: false
  }
};

export default initialState;
