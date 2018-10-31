import React, { Component } from "react";
import Header from "../../components/Header";
import ContactList from "../../components/ContactList";
import FormNewUser from "../../components/Form-New-User";
//Probar redux
import { connect } from "react-redux";

class ContentMain extends Component {
  render() {
    return (
      <div>
        <Header title="Contacts App" />
        <ContactList
          contacts={this.props.contacts}
          onContactsClick={() =>
            console.log("Mostrando una lista de contactos")
          }
        />
        <FormNewUser />
      </div>
    );
  }
} //End class

const mapStateProps = function(store) {
  ///...
  return {
    contacts: store.contacts
  };
};

export default connect(mapStateProps)(ContentMain);

/**
 *
 * redux toolbet
 */
