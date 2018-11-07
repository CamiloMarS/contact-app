import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import DataContact from "../../components/ChatComponents/DataContact";
import Message from "../../components/ChatComponents/Message";
import InputMessage from "../../components/ChatComponents/InputMessage";
import { connect } from "react-redux";

class MessageContainer extends Component {
  //Here is constructor

  viewContactOptions = () => {
    console.log("VIEW OPTIONS ");
  };

  render() {
    const { name, cellphone } = this.props.conversation.contact;
    return (
      /** Container chat messages */
      <Container fluid style={{ backgroundColor: "#ccc" }}>
        <DataContact
          contactName={name}
          numberphone={cellphone}
          showOptionsButton={this.viewContactOptions}
        />
        <div>
          <Message
            person="Yo"
            text="Aunque pueden ocurrir más sucesos."
            position="left"
          />
          <Message person="Otro" text="Texto de prueba" position="right" />
        </div>
        <InputMessage />
      </Container>
    );
  }
} //end class

//conectar redux con react
const mapStateProps = function(store) {
  return {
    conversation: store.conversation
  };
};

export default connect(mapStateProps)(MessageContainer);
