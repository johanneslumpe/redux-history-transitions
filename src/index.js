export default (history, catchAllHandler) => {
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
          const { path, query, replace, state } = transitionData;
          const method = replace ? 'replaceState' : 'pushState';

          history[method](state, path, query);
        }

        return action;
      }
    };
  };
}
