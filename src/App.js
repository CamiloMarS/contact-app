import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Footer from "./components/Footer";
//Importar los contenedores de la aplicación
import ContentMain from "./containers/main";
import MessageContainer from "./containers/MessagesContainers";

class App extends Component {
  render() {
    //Estilos generales
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column"
        }}
      >
        <div style={{ display: "flex" }}>
          <ContentMain />
          <MessageContainer />
        </div>
        <Footer company={"Sngular"} phrase={"It can be done."} />
      </div>
    );
  }
}

export default App;
