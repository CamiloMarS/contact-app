/**
 * General state for all application
 */
// {
//   id: null,
//   name: "",
//   cellphone: ""
// }
/**
 * Messajes: [
 *   [{id:0, contact: }]
 *
 * ]
 */
const initialState = {
  contacts: [],
  search: "",
  result: [],
  conversation: {
    contact: {
      name: "Eliana Gomez",
      cellphone: "45564555342",
      messages: []
    }
  },
  ui: {
    openForm: false
  }
};

export default initialState;
