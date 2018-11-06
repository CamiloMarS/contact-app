import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";
import ButtonDelete from "../Button-Delete";

//Contact component
const setColor = () => {
  return `rgba(${Math.trunc(Math.random() * (255 - 0) + 0)},${Math.trunc(
    Math.random() * (255 - 0) + 0
  )},${Math.trunc(Math.random() * (255 - 0) + 0)})`;
};

const Contact = ({ onclick, contact }) => {
  const { id, name, cellphone } = contact;
  return (
    <li className="contact" key={id}>
      <span className="initialName" style={{ backgroundColor: setColor() }}>
        {name.substr(0, 1) || "C"}
      </span>
      <p className="contactData">
        <span className="fullname">{name}</span>
        <span>{cellphone}</span>
      </p>
      <ButtonDelete deleteFuncttion={onclick} />
    </li>
  );
};

Contact.propTypes = {
  //,,,
  onclick: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired
};

export default Contact;
