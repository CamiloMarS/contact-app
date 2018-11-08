/** Estado inicial de la aplicación */
const initialState = {
  contacts: [],
  search: "",
  result: [],
  conversationActive: {
    contact: {
      id: 0,
      name: "",
      cellphone: "",
      messages: []
    }
  },
  conversations: {},
  //store para interfaces de usario
  ui: {
    openForm: false
  }
};

export default initialState;
