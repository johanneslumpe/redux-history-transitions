import React from 'react';
import { RouteHandler, Link } from 'react-router';

export default class App {

  handleLoginClick = (e) => {
    this.props.login();
  }

  handleLogoutClick = (e) => {
    this.props.logout();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleLoginClick}>Log in</button>
        <button onClick={this.handleLogoutClick}>Log out</button>
        <Link to="/item-list">List items</Link>
        <p>Logged in: {this.props.loggedIn ? 'yes': 'no'}</p>

        <RouteHandler />
      </div>
    );
  }
}
