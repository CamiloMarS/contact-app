import React from "react";
import { Dropdown } from "semantic-ui-react";
import PropTypes from "prop-types";

const styles = {
  circle: {
    padding: "5px"
  }
};

const options = [
  { key: "", text: "", icon: "" },
  { key: "details", text: "Details", icon: "info" },
  { key: "delete", text: "Delete conversation", icon: "delete" }
];

const ButtonOptions = ({ actionFunction }) => {
  return (
    <Dropdown
      style={styles.circle}
      onClick={actionFunction}
      options={options}
      pointing="top right"
      icon="ellipsis vertical"
    />
  );
};

ButtonOptions.propTypes = {
  actionFunction: PropTypes.func.isRequired
};

export default ButtonOptions;
