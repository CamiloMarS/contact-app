import React from "react";
import PropTypes from "prop-types";

const Message = ({ person, text, position }) => {
  let pos =
    position === "left"
      ? { position: "relative", left: "10px" }
      : { position: "relative", right: "0px" };

  return (
    //Dialogo
    <div
      className="message"
      style={{
        width: "100%"
      }}
    >
      <div
        style={{
          maxWidth: "80%",
          minWidth: "20%",
          width: "250xp !important",
          borderRadius: "0 100px 100px 0px",
          backgroundColor: "#fff",
          padding: "5px",
          margin: "4px",
          ...pos
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
