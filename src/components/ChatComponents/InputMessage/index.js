import React from "react";
import { Input, Button } from "semantic-ui-react";

class InputMessage extends React.Component {
  constructor(props) {
    super(props);
    this.messageWritting = React.createRef();
  }

  getMessage = () => {
    const input = this["messageWritting"]["inputRef"]["value"]; //Obtiene el value del input
    if (input.length > 0)
      this.props.getNewMessage({ text: input, when: new Date() });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          position: "relative"
        }}
      >
        <Input
          type="text"
          placeholder="Mi fabuloso mensaje..."
          style={{ width: "90%" }}
          size="tiny"
          ref={input => (this.messageWritting = input)}
        />
        <Button circular icon="send" onClick={this.getMessage} />
      </div>
    );
  }
}

export default InputMessage;
