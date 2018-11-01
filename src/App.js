import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

//Importar los contenedores de la aplicación
import ContentMain from "./containers/main";

class App extends Component {
  render() {
    return <ContentMain />;
  }
}

export default App;
