# redux-react-router-transitions
Router transitions based on arbitrary actions.

This store enhancer allows you to co-locate transitions next to your actions and have them automatically executed on your router instance, after the action has been dispatched.

## Why?
A typical case is that you want to redirect your user to another page, when they log in. There are multiple ways of doing this. You could for example listen to your store and perform a transition based on some kind of `loginSuccessful` flag. But this type of flag is something that does not actually belong into your state, as it is only used as an internal flag so you know when to transition.

Another way would be to use something like RX, and listen to distinct state changed, so you could transition your user to a page, whenever the `loggedIn` or `user` prop on your state changes.

While these approaches work, they make it hard to connect a transition to a specific action. Your transitions are also spread out over your code. `redux-react-router-transitions` allows your to embed your transitions directly within your actions and have them executed after your action has been dispatched.

## Usage

Create an enhanced store like this:

```javascript
import { createStore, compose } from 'redux';
import storeEnhancer from 'redux-react-router-transitions';

// you have to create your router here and pass it to the store enhancer

const finalCreateStore = compose(
  storeEnhancer(router),
  createStore
);
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
          path: '/logged-in/:userId',
          query: {
            some: 'queryParam'
          },
          params: {
            userId: action.payload.userId
          }
        })
      }
    };
  },
}
```

Now every time you dispatch your `login` action, a transition to `/logged-in` will happen automatically. Of course `query` and `params` are optional. They are just here to show a complete example.

## API

coming soon


## Example
For a working example check out the `example` directory!

### Running the example app
```
git clone https://github.com/johanneslumpe/redux-react-router-transitions.git
cd redux-react-router-transitions
npm install

cd example
npm install
npm start
open http://localhost:3000
```
