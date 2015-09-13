import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {

  handleLoginClick = (e) => {
    this.props.login();
  }

  handleLogoutClick = (e) => {
    this.props.logout();
  }

  handleRootClick = (e) => {
    this.props.transitionToRoot();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleLoginClick}>Log in</button>
        <button onClick={this.handleLogoutClick}>Log out</button>
        <button onClick={this.handleRootClick}>Transition to root</button>
        <Link to="/item-list">List items</Link>
        <p>Logged in: {this.props.loggedIn ? 'yes': 'no'}</p>

        {this.props.children}
      </div>
    );
  }
}
