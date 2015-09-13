import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import itemActions from '../actions/Items';
import ItemList from '../components/ItemList';

const mapStateToProps = ({ items: { items } }, props) => ({
  items
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(itemActions, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class ItemListContainer extends Component {

  render() {
    return <ItemList {...this.props} />;
  }

}
