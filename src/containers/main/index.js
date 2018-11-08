import React, { Component } from "react";
import Header from "../../components/Header";
import ContactList from "../../components/ContactList";
import FormNewUser from "../../components/Form-New-User";
import ModalForm from "../../components/Modal";
import InputSearch from "../../components/Input-Search";
import { Button } from "semantic-ui-react";
import { getContacts } from "../../services/getContacts";
import { connect } from "react-redux";
import { bindActionCreators } from "redux"; //Combina
import {
  searchContact,
  removeContact,
  addContact,
  openForm as OpenNewContactForm
} from "../../actions/toolbelt";

class ContentMain extends Component {
  componentDidMount() {
    //Agregar los contactos al store
    getContacts()
      .then(res => {
        const data = res.data["data"];
        if (data.length > 0) {
          const { addNewContact } = this.props;
          data.forEach(result => {
            addNewContact(result);
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  } //end componentDidMount

  //Metodo para abrir la modal
  openFormContact = () => {
    const { openFormModal, openForm } = this.props;
    openFormModal(!openForm);
  };

  //Recibir el valor buscado
  searchContactByName = text => {
    const { searchToContact } = this.props;
    searchToContact(text);
  };

  //Cerrar modal de formulario
  closeContactForm = value => {
    const { openFormModal } = this.props;
    openFormModal(false);
  };

  //Borrar el contacto...
  deleteContact = idContact => {
    const { dropContact } = this.props;
    dropContact(idContact);
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "whitesmoke",
          textAlign: "center",
          borderRight: "1px solid #ccc",
          minHeight: "80vh"
        }}
      >
        <Header title="Contactos">
          <InputSearch getTextToSearch={this.searchContactByName} />
        </Header>
        <Button
          circular
          color="twitter"
          icon="plus"
          onClick={this.openFormContact}
          style={{ margin: "2px" }}
        />
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
  return {
    contacts: store.contacts,
    openForm: store.ui.openForm,
    searchText: store.search,
    resultSearch: store.result
  };
};

//Crear las funciones dispachadoras
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addNewContact: addContact,
      openFormModal: OpenNewContactForm,
      searchToContact: searchContact,
      dropContact: removeContact
    },
    dispatch
  );
};

export default connect(
  mapStateProps,
  mapDispatchToProps
)(ContentMain);

/**
 *
 * redux toolbelt
 * redux sagga
 * pusherjs para chats, chatkit
 */
