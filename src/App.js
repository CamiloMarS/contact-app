import React, { Component } from "react";

//Importar los contenedores de la aplicación
import ContentMain from "./containers/main";
import store from "./store";

let unsubscribe = store.subscribe(() => {
  console.log("Status ==>", store.getState());
});

class App extends Component {
  render() {
    return <ContentMain />;
  }
}

export default App;
