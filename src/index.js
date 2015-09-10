export default (router, catchAllHandler) => {
  return next => (reducer, initialState) => {
    const store = next(reducer, initialState);

    return {
      ...store,
      dispatch(action) {
        const { type, meta } = action;
        const transitionMetaFunc = meta ?
          (meta.transition || catchAllHandler) :
          catchAllHandler;

        store.dispatch(action);

        const transitionData = transitionMetaFunc ?
          transitionMetaFunc(store.getState(), action) :
          null;

        if (transitionData) {
          const { path, query, params, replace } = transitionData;
          if (replace) {
            router.replaceWith(path, params, query);
          } else {
            router.transitionTo(path, params, query);
          }
        }

        return action;
      }
    };
  };
}
