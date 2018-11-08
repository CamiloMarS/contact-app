import React from "react";
import PropTypes from "prop-types";

const Message = ({ person, text, position }) => {
  let pos =
    position === "destiny"
      ? { borderRadius: "100px 0 0 100px", textAlign: "right", right: 0 }
      : {
          borderRadius: "0 100px 100px 0px"
        };

  return (
    //Dialogo
    <div
      style={{
        padding: "5px",
        margin: "4px",
        width: "100%",
        position: "relative"
      }}
    >
      <div
        style={{
          ...pos,
          backgroundColor: "#fff",
          padding: "5px",
          maxWidth: "200px"
        }}
      >
        <span
          style={{ display: "block", fontWeight: "bolder" }}
        >{`${person}:`}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

Message.propTypes = {
  person: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};

export default Message;
