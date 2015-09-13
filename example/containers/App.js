import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../components/App';
import sessionActions from '../actions/Session';
import routingActions from '../actions/Routing';

const mapStateToProps = ({ session }) => ({
  loggedIn: session.loggedIn
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(sessionActions, dispatch),
  ...bindActionCreators(routingActions, dispatch),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class AppContainer extends Component {

  render() {
    return <App {...this.props} />;
  }

}
