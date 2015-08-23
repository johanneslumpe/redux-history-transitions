import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import itemActions from '../actions/Items';
import routingActions from '../actions/Routing';

const mapStateToProps = ({ items: { items } }, props) => {
  const foundItems = items.filter((item) => {
    // convert number with string
    return item.id == props.params.itemId;
  });

  return {
    item: foundItems.length ? foundItems[0] : null
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(routingActions, dispatch),
  ...bindActionCreators(itemActions, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class ItemDetailsContainer {

  componentDidMount() {
    if (!this.props.item) {
      this.props.entityNotFound();
    }
  }

  handleRemoveClick = (e) => {
    this.props.removeItem(this.props.item.id);
  }

  render() {
    const { item } = this.props;

    return (
      <div>
        {item && <h1>{item.title}</h1>}
        <button onClick={this.handleRemoveClick}>Remove item</button>
      </div>
    );
  }

}
