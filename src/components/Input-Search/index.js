import React from "react";
//import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

class InputSearch extends React.Component {
  constructor(props) {
    super(props);
    this.searchText = React.createRef();
  }

  clearInput = (...inputs) => {
    return inputs.map(inpt => (inpt.current.value = ""));
  };

  sendTextToSearch = () => {
    let text = this.searchText.current.value;
    text = text.length > 0 ? text : "";
    this.clearInput(this.searchText);
    this.props.getTextToSearch(text);
  };

  render() {
    //Styles for this component
    const styles = {
      content: {
        backgroundColor: "#ccc",
        padding: "5px",
        display: "flex",
        justifyContent: "space-around",
        minWidth: "250px"
      }
    };

    //Recibir una función en los props
    return (
      <div style={styles.content}>
        <input type="text" placeholder="Search contact" ref={this.searchText} />
        <Button primary onClick={this.sendTextToSearch} icon="search" />
      </div>
    );
  }
}

export default InputSearch;
