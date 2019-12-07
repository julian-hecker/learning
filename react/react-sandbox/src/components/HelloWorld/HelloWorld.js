import React from 'react';

class HelloWorld extends React.Component {
  render() {

    let message;
    if (true) {
      message = "Hello, World!";
    }
    return (
      <h1>{message}</h1>
    );
  }
}

export default HelloWorld;