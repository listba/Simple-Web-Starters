import React from 'react';
 
class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'Basic React App',
    };
  }
 
  render() {
    return (
      <p>
        {this.state.text}
      </p>
    );
  }
}
export default Welcome;