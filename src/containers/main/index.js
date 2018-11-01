import React, { Component } from "react";
import Header from "../../components/Header";
import ContactList from "../../components/ContactList";
import FormNewUser from "../../components/Form-New-User";
import ModalForm from "../../components/Modal";
import InputSearch from "../../components/Input-Search";
import { Button } from "semantic-ui-react";

//Probar redux
import { connect } from "react-redux";
import { openForm, searchContact, removeContact } from "../../actions";

class ContentMain extends Component {
  componentDidMount() {
    console.log("MESSAGE ==> Cmponente montado!");
  }

  //Metodo para abrir la modal
  openFormContact = () => {
    const valueCurrent = this.props.openForm;
    console.log("OPEN FORM ==> ", valueCurrent);
    this.props.dispatch(openForm(!valueCurrent));
  };

  //Recibir el valor buscado
  searchContactByName = text => {
    console.log(`SEARCH => ${text}`);
    this.props.dispatch(searchContact(text));
  };

  //Cerrar modal de formulario
  closeContactForm = value => {
    console.log("CLOSE FORM ==> ", value);
    this.props.dispatch(openForm(false));
  };

  //Borrar el contacto...
  deleteContact = idContact => {
    console.log("DELETE TO ", idContact);
    this.props.dispatch(removeContact(idContact));
  };

  render() {
    return (
      <div>
        <Header title="Contacts App">
          <Button color="facebook" icon="plus" onClick={this.openFormContact} />
          <InputSearch getTextToSearch={this.searchContactByName} />
        </Header>

        <ContactList
          contacts={
            this.props.resultSearch.length > 0
              ? this.props.resultSearch
              : this.props.contacts
          }
          onContactsClick={this.deleteContact}
        />

        <ModalForm open={this.props.openForm} close={this.closeContactForm}>
          <FormNewUser />
        </ModalForm>
      </div>
    );
  }
} //End class

const mapStateProps = function(store) {
  ///...
  return {
    contacts: store.contacts,
    openForm: store.ui.openForm,
    searchText: store.search,
    resultSearch: store.result
  };
};

export default connect(mapStateProps)(ContentMain);

/**
 *
 * redux toolbelt
 * redux sagga
 */
