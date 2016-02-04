# redux-history-transitions

**Note: this library was called `redux-react-router-transitions` before, but since version 0.4.0 the hard dependency on react-router has been removed.  You can use this library with any routing system that utilizes the `history` library.**

`history` transitions based on arbitrary actions.

This store enhancer allows you to co-locate transitions next to your actions and have them automatically executed on your history instance, after the action has been dispatched.

## Why?

A typical case is that you want to redirect your user to another page, when they log in. There are multiple ways of doing this. You could for example listen to your store and perform a transition based on some kind of `loginSuccessful` flag. But this type of flag is something that does not actually belong into your state, as it is only used as an internal flag so you know when to transition.

Another way would be to use something like RX, and listen to distinct state changed, so you could transition your user to a page, whenever the `loggedIn` or `user` prop on your state changes.

While these approaches work, they make it hard to connect a transition to a specific action. Your transitions are also spread out over your code. `redux-history-transitions` allows you to embed your transitions directly within your actions and have them executed after your action has been dispatched.

## Installation

```
npm install --save redux-history-transitions
```

## Usage

Create an enhanced store like this:

```javascript
import { createStore, compose } from 'redux';
import handleTransitions from 'redux-history-transitions';

// you have to create your history instance here and pass it to the store enhancer
// Note: in order to use `search`, you have to enhance your history using the `useQueries`
// enhancer!

const enhancer = handleTransitions(history)
const store = createStore(reducer, initialState, enhancer);

// Note: passing enhancer as the last argument to createStore requires redux@>=3.1.0
```

Now you can dispatch actions in the following form and have your desired transition automatically executed for you:

```javascript
// we expect `LOGGED_IN` to have been imported here from your action constants

export default {

  login() {
    return {
      type: LOGGED_IN,
      payload: {
        userId: 123
      }
      meta: {
        transition: (state, action) => ({
          pathname: `/logged-in/${action.payload.userId}`,
          search: '?a=query',
          state: {
            some: 'state'
          }
        })
      }
    };
  },
}
```

Now every time you dispatch your `login` action, a transition to `/logged-in/SOMEUSERID` will happen automatically. Of course `search` and `state` are optional. They are just here to show a complete example.

## Example

For a working example check out the `example` directory!

### Running the example app

```
git clone https://github.com/johanneslumpe/redux-history-transitions.git
cd redux-history-transitions
npm install

cd example
npm install
npm start
open http://localhost:3000
```

## FAQ

### Why is this a store enhancer and not a middleware?

Because the transition handlers should receive the state *after*  the action has been dispatched. And I did not want to use something like `_.defer`.

### Can I perform `replace` transitions instead of `push`?

Yes, just add `replace: true` to the object returned by your action's `meta.transition` function.
