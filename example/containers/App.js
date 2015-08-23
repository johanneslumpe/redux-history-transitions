import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../components/App';
import sessionActions from '../actions/Session';

const mapStateToProps = ({ session }) => ({
  loggedIn: session.loggedIn
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(sessionActions, dispatch),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class AppContainer {

  render() {
    return <App {...this.props} />;
  }

}
