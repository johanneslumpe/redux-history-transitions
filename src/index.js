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
      const transitionHandler = meta ?
        (meta.transition || catchAllHandler) :
        catchAllHandler;

      const prevState = transitionHandler && store.getState();

      store.dispatch(action);

      const nextState = transitionHandler && store.getState();

      let transitionData;

      if (transitionHandler) {
        if (typeof transitionHandler === 'object') {
          const { error, meta: { done } } = action;
          let handler = 'begin';

          if (done) {
            handler = error ? 'failure' : 'success';
          }

          const func = transitionHandler[handler];
          if (func) {
            transitionData = func(prevState, nextState, action);
          }
        } else {
          transitionData = transitionHandler(prevState, nextState, action);
        }
      }

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
