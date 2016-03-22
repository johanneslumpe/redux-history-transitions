export const executeTransition = history => transitionData => {
  if (transitionData) {
    const method = transitionData.replace ? 'replace' : 'push';
    history[method](transitionData);
  }
};

export default (history, catchAllHandler) => next => (reducer, initialState) => {
  const store = next(reducer, initialState);
  const finalExecuteTransition = executeTransition(history);

  return {
    ...store,
    dispatch(action) {
      const { meta } = action;
      const transitionMetaFunc = meta ?
        (meta.transition || catchAllHandler) :
        catchAllHandler;

      const prevState = transitionMetaFunc && store.getState();

      store.dispatch(action);

      const nextState = transitionMetaFunc && store.getState();

      const transitionData = transitionMetaFunc && (
        transitionMetaFunc(prevState, nextState, action)
      );

      if (transitionData) {
        if (typeof transitionData.then === 'function') {
          transitionData
          .then(finalExecuteTransition)
          .catch(finalExecuteTransition);
        } else {
          finalExecuteTransition(transitionData);
        }
      }

      return action;
    },
  };
};
