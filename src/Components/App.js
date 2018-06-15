import React, { Component } from 'react';

type Props = {};

type State = {
  count: number
};

export default class App extends Component<Props, State> {
  state = {
    count: 0
  };

  render() {
    return(
      <div className="container">
        <div className="from">
          <span className="label">From: </span>
          <span className="value">John Doe</span>
        </div>
        <div className="status">
          <span className="label">Status: </span>
          <span className="value"> Unread</span>
        </div>
        <div className="message">
          <span className="label">Message: </span>
          <span className="value">Have a great day!</span>
        </div>
      </div>
    );
  }
}
