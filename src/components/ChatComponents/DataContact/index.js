import React from "react";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";
import ButtonOptions from "../ButtonOptions";

const styles = {
  segment: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3px 10px",
    backgroundColor: "#fff"
  }
};

const DataContact = ({ contactName, showOptionsButton }) => (
  <div style={styles.segment}>
    <div>
      <Icon name="user" color="blue" /> {contactName}
    </div>
    <div>
      <ButtonOptions actionFunction={showOptionsButton} />
    </div>
  </div>
);

DataContact.propTypes = {
  contactName: PropTypes.string.isRequired,
  showOptionsButton: PropTypes.func.isRequired
};

export default DataContact;
