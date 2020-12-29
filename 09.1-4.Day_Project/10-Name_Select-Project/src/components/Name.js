import React from 'react';

export class Name extends React.Component {
  render() {

    return (
      <div>
        <h1>Hey, my name is {this.props.name}</h1>
        <h2>Don't you think ........ is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked ........!</h2>

        <h2>{this.props.wishes}</h2>
      </div>
    );
  }
}