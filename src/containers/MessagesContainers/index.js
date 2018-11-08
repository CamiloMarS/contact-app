import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import DataContact from "../../components/ChatComponents/DataContact";
import MessageList from "../../components/ChatComponents/MessagesList";
import InputMessage from "../../components/ChatComponents/InputMessage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sendMessage } from "../../actions/toolbelt";

class MessageContainer extends Component {
  //Opciones de la conversacion del contacto
  viewContactOptions = () => {
    console.log("VIEW OPTIONS ");
  };

  /** Agregar nuevo mensaje a la conversación */
  sendNewMessage = objetMessage => {
    const destiny = this.props.conversation.contact["id"];
    const addFormToNewMessage = {
      ...objetMessage,
      type: "origin",
      contactName: "Camilo",
      destiny
    };
    this.props.newMessage(addFormToNewMessage);
  };

  render() {
    //Detalles del empleado
    const { name, cellphone, messages } = this.props.conversation.contact;
    return (
      /** Contenedor de los mensajes */
      <Container fluid style={{ backgroundColor: "#ccc" }}>
        <DataContact
          contactName={name}
          numberphone={cellphone}
          showOptionsButton={this.viewContactOptions}
        />
        {console.log(messages)}
        {/* <MessageList listMessages={messages}>
          <InputMessage getNewMessage={this.sendNewMessage} />
        </MessageList> */}
      </Container>
    );
  }
} //end class

//Conectar las props con el store
const mapStateProps = function(store) {
  return {
    conversation: store.conversationActive
  };
};

//Conectar acciones
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      newMessage: sendMessage
    },
    dispatch
  );
};

export default connect(
  mapStateProps,
  mapDispatchToProps
)(MessageContainer);
