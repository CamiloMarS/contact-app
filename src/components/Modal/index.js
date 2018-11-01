import React from "react";
import { Modal } from "semantic-ui-react";

class ModalForm extends React.PureComponent {
  close = () => {
    this.props.close(false);
  };

  render() {
    return (
      <Modal
        dimmer="blurring"
        size="tiny"
        open={this.props.open}
        onClose={this.close}
        className="ModalForm"
        closeIcon
      >
        <Modal.Header>Nuevo Contacto</Modal.Header>
        <Modal.Content>{this.props.children}</Modal.Content>
      </Modal>
    );
  }
}

export default ModalForm;
