import React from "react";
import { Input, Button } from "semantic-ui-react";

class InputMessage extends React.Component {
  constructor(props) {
    super(props);
    this.messageWritting = React.createRef();
  }

  getMessage = text => {
    console.log(text.value);
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Input
          type="text"
          placeholder="Mi increible mensaje"
          style={{ width: "89%" }}
          size="tiny"
          onChange={this.getMessage}
        />
        <Button circular icon="send" onClick={this.getMessage} />
      </div>
    );
  }
}

export default InputMessage;
