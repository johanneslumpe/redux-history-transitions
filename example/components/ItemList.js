import React from 'react';
import { Link } from 'react-router';

import { adjectives, nouns } from '../words';

const getRandomWord = (list) => list[Math.round((list.length - 1) * Math.random())];
const getItemName = () => `${getRandomWord(adjectives)} ${getRandomWord(nouns)}`;

export default class ItemList {

  handleAddClick = (e) => {
    this.props.addItem(getItemName());
  }

  render() {
    return (
      <div>
        <h1>Item list</h1>
        <button onClick={this.handleAddClick}>Add item</button>
        <ul>
          {this.props.items.map((item) => {
            return (
              <li key={item.id}>
                <Link to={`/item-details/${item.id}`}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
