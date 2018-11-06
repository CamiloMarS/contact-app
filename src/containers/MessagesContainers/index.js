import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import DataContact from "../../components/ChatComponents/DataContact";
import Message from "../../components/ChatComponents/Message";

class MessageContainer extends Component {
  //Here is constructor

  viewContactOptions = () => {
    console.log("VIEW OPTIONS ");
  };

  render() {
    const styles = {
      content: {
        backgroundColor: "#e0e0e0",
        boxShadow: "1px 1px 2px #ccc",
        width: "350px !important",
        maxWidth: "400px"
      }
    };

    return (
      /** Container chat messages */
      <Container fluid style={styles.content}>
        <DataContact
          contactName={"Camilo Salazar"}
          showOptionsButton={this.viewContactOptions}
        />
        <div>
          <Message
            person="Yo"
            text="Aunque pueden ocurrir una tras otra."
            position="left"
          />
          <Message person="Otro" text="Texto de prueba" position="right" />
        </div>
      </Container>
    );
  }
} //end class

export default MessageContainer;
