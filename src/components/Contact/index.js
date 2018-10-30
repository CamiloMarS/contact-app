import React, { PropTypes } from "react";
import "./Contact.css";

//Contact component
const setColor = () => {
  return `rgba(${Math.trunc(Math.random() * (255 - 0) + 0)},${Math.trunc(
    Math.random() * (255 - 0) + 0
  )},${Math.trunc(Math.random() * (255 - 0) + 0)})`;
};

const Contact = ({ onclick, contact }) => {
  const { id, name, cellphone } = contact;
  return (
    <li className="contact" key={id} onClick={onclick}>
      <span className="initialName" style={setColor()}>
        {name.substr(0, 1) || "C"}
      </span>
      <p className="contactData">
        <span>{name}</span>
        <span>{cellphone}</span>
      </p>
    </li>
  );
};

Contact.propTypes = {
  //,,,
  onclick: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired
};

export default Contact;
