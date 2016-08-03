import React from 'react';
 
class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'Welcome! This is a simple starter app for quicker React startup',
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