import React, { Component } from 'react';

class ClassToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showName: true,
    };
  }

  handleButtonClick = () => {
    this.setState((prevState) => ({
      showName: !prevState.showName,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Toggle Name</button>
        {this.state.showName && <p>Name: John Doe</p>}
      </div>
    );
  }
}

export default ClassToggleButton;
