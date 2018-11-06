import React from "react";
import { Button } from "semantic-ui-react";
import PropTypes from "prop-types";

const styles = {
  buttonStyles: {
    position: "absolute",
    right: "40%"
  }
};

const ButtonDelete = ({ deleteFuncttion }) => {
  return (
    <Button
      circular
      icon="trash"
      onClick={deleteFuncttion}
      style={styles.buttonStyles}
    />
  );
};

//Obligar a que me manden una funcion
ButtonDelete.propTypes = {
  deleteFuncttion: PropTypes.func.isRequired
};

export default ButtonDelete;
