import React from "react";
import PropTypes from "prop-types";
import Contact from "../Contact";

const styles = {
  list: {
    width: "100%",
    margin: "0 auto",
    padding: "3px"
  }
};

const ContactsList = ({ contacts, onContactsClick }) => {
  return (
    <ul style={styles.list}>
      {/** Contact List */}
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          onclick={() => onContactsClick(contact.id)}
          contact={contact}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      cellphone: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onContactsClick: PropTypes.func.isRequired
};

export default ContactsList;
