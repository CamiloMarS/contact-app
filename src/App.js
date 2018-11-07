import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Footer from "./components/Footer";
//Importar los contenedores de la aplicación
import ContentMain from "./containers/main";
import MessageContainer from "./containers/MessagesContainers";
//const pusher = require("./Pusher/config.js");

class App extends Component {
  // componentDidMount() {
  //   pusher.trigger("my-chanel", "my-event", {
  //     message: "Hello World from C-You!"
  //   });
  // }x

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
