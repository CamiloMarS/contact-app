import React from "react";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";

/** Estilos para el footer */
const styles = {
  content: {
    backgroundColor: "#145ba8",
    color: "#fff",
    width: "100%",
    padding: "3px 10px",
    position: "fixed",
    marginTop: "5px",
    bottom: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start"
  }
};

const getCurrentYear = () => {
  const now = new Date();
  return now.getFullYear();
};

//Component
const Footer = props => {
  return (
    <footer style={styles.content}>
      <p>
        {props.company} {getCurrentYear()} <Icon name="heart" color="red" />
      </p>
      <p>{props.phrase}</p>
    </footer>
  );
};

Footer.propTypes = {
  company: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired
};

export default Footer;
