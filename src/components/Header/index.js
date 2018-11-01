import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

/**
 * Content Main
 * @param {title} props
 */

const Header = props => {
  return (
    <header className="header-app">
      <h3>{props.title}</h3>
      <div className="contentChildren">{props.children}</div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};
export default Header;
