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

        const prevState = transitionMetaFunc && store.getState();

        store.dispatch(action);

        const nextState = transitionMetaFunc && store.getState();

        let transitionData = transitionMetaFunc && (
          transitionMetaFunc(prevState, nextState, action)
        );

        if (transitionData) {
          const method = transitionData.replace ? 'replace' : 'push';
          history[method](transitionData);
        }

        return action;
      }
    };
  };
}
