import React from "react";
import { PropTypes } from "prop-types";
import Message from "../Message";
import DialogMessage from "../../DialogMessages";
import { Icon } from "semantic-ui-react";

const styles = {
  list: {
    width: "100%",
    padding: 5,
    height: "100%"
  }
};

const showListMessagesOrMessageDialog = (messages, nameContact) => {
  //Comprobar que sea array y tenga minimo  un elemento
  if (Array.isArray(messages) && messages.length > 0) {
    return messages.map((message, i) => (
      <Message
        key={i}
        person={message.contactName}
        text={message.text}
        position={message.type}
      />
    ));
  } else {
    return (
      <DialogMessage
        text={`Comenzar una conversación con ${nameContact ||
          "este contacto"}.`}
      >
        <Icon name="info circle" color="yellow" />
      </DialogMessage>
    );
  }
};

const MessagesList = ({ listMessages, nameContact, children }) => (
  <div style={styles.list}>
    {children} {/** Recibe el Input-search */}
    {showListMessagesOrMessageDialog(listMessages, nameContact)}
  </div>
);

MessagesList.propTypes = {
  listMessages: PropTypes.array.isRequired || undefined,
  nameContact: PropTypes.string.isRequired
};

export default MessagesList;
