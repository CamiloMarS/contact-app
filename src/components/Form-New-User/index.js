import React from "react";
import "./styles.css";

import { connect } from "react-redux";
import { addContact } from "../../actions";
import { Button } from "semantic-ui-react";

class FormNewUser extends React.Component {
  constructor(props) {
    super(props);
    //Creamos la referencia de los elementos
    this.contactName = React.createRef();
    this.contactCellphone = React.createRef();
  }

  clearInputs = (...inputs) => {
    inputs.map(input => (input.current.value = null));
  };

  sendDataContactAndClear = () => {
    const { contactName, contactCellphone } = this;
    if (
      contactName.current.value.toString().length > 0 &&
      contactCellphone.current.value.toString().length > 0
    ) {
      this.props.dispatch(
        addContact({
          id: Math.trunc(Math.random() * (10000000 - 1) + 1),
          name: contactName.current.value,
          cellphone: contactCellphone.current.value
        })
      );
      this.clearInputs(contactName, contactCellphone);
    } else console.error("No se puede agregar un contacto vacio!");
  };

  render() {
    return (
      <div className="content-form-newContact">
        <input
          type="text"
          placeholder="Nombre contacto"
          ref={this.contactName}
          className="controlInput"
        />
        <input
          type="text"
          placeholder="Número telefonico"
          ref={this.contactCellphone}
          className="controlInput"
        />
        <Button primary color="blue" onClick={this.sendDataContactAndClear}>
          Registrar
        </Button>
      </div>
    );
  }
}

export default connect()(FormNewUser);
