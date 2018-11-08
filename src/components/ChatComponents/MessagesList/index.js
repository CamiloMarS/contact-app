import React from "react";
import { PropTypes } from "prop-types";
import Message from "../Message";

const styles = {
  list: {
    width: "100%",
    padding: 5,
    height: "100%"
  }
};

const MessagesList = ({ listMessages, children }) => {
  return (
    <div style={styles.list}>
      {children}

      {listMessages.map((message, i) => (
        <Message
          key={i}
          person={message.contactName}
          text={message.text}
          position={message.type}
        />
      ))}
    </div>
  );
};

MessagesList.propTypes = {
  listMessages: PropTypes.array.isRequired
};

export default MessagesList;
