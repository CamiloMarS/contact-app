import React from "react";
import { Button } from "semantic-ui-react";
import PropTypes from "prop-types";

const styles = {
  buttonStyles: {
    marginLeft: "30%",
    right: 0
  }
};

const ButtonDelete = ({ deleteFuncttion }) => {
  return (
    <Button
      circular
      icon="trash"
      color="google plus"
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
