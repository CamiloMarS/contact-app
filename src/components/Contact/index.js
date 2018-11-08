import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";
import ButtonDelete from "../Button-Delete";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  viewDetailsContact,
  getConversationContact
} from "../../actions/toolbelt";

//Contact component
const setColor = () => {
  return `rgba(${Math.trunc(Math.random() * (255 - 0) + 0)},${Math.trunc(
    Math.random() * (255 - 0) + 0
  )},${Math.trunc(Math.random() * (255 - 0) + 0)})`;
};

class Contact extends React.Component {
  //Funcion para ver detalles del contacto
  sendContactData = () => {
    const {
      contact: { id, name, cellphone },
      transferContactData,
      loadMessages
    } = this.props;

    transferContactData({ id, name, cellphone });
    loadMessages(id);
  };

  render() {
    //Propiedades
    const { id, name, cellphone } = this.props.contact;
    const { onclick } = this.props;

    return (
      <li className="contact" key={id} onClick={this.sendContactData}>
        <span
          className="initialName"
          style={{ backgroundColor: setColor(), color: "#fff" }}
        >
          {name.substr(0, 1) || "C"}
        </span>
        <p className="contactData">
          <span className="fullname">{name}</span>
          <span>{cellphone}</span>
        </p>
        <ButtonDelete deleteFuncttion={onclick} />
      </li>
    );
  }
} //end class

const mapStateProps = store => {
  return {
    contacts: store.contacts
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      transferContactData: viewDetailsContact,
      loadMessages: getConversationContact
    },
    dispatch
  );
};

Contact.propTypes = {
  onclick: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired
};

export default connect(
  mapStateProps,
  mapDispatchToProps
)(Contact);
