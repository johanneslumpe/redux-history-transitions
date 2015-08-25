export default (router, catchAllHandler) => {
  return next => (reducer, initialState) => {
    const store = next(reducer, initialState);

    return {
      ...store,
      dispatch(action) {
        const { type, meta } = action;
        const transition = meta ?
          (meta.transition || catchAllHandler) :
          catchAllHandler;

        store.dispatch(action);

        const transitionResult = transition ?
          transition(store.getState(), action) :
          null;

        if (transitionResult) {
          const { path, query, params } = transitionResult;
          router.transitionTo(path, params, query);
        }

        return action;
      }
    };
  };
}
