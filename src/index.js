export default (transitionMap, router) => {
  return next => (reducer, initialState) => {
    const store = next(reducer, initialState);

    return {
      ...store,
      dispatch(action) {
        const { type } = action;
        const transitionHandler = transitionMap[type];
        store.dispatch(action);

        if (transitionHandler) {
          const handlerResult = transitionHandler(store.getState(), action);

          if (handlerResult) {
            const { path, query, params } = handlerResult
            router.transitionTo(path, params, query);
          }
        }
        return action;
      }
    };
  };
}
