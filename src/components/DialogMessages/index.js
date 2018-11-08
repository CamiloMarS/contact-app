import React from "react";
import PropTypes from "prop-types";

const DialogMessage = ({ children, text }) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "whitesmoke",
        borderRadius: "20px",
        alignItems: "center",
        padding: 10,
        border: "1px solid #ccc",
        margin: "5px auto",
        width: "300px"
      }}
    >
      {children}
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

DialogMessage.propTypes = {
  text: PropTypes.string.isRequired
};

export default DialogMessage;
