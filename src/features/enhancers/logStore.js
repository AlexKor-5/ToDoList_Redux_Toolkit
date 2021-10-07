export const logStore = (createStore) => {
    return (rootReducer, preloadedState, enhancers) => {
        const store = createStore(rootReducer, preloadedState, enhancers)

        function newDispatch(action) {
            const result = store.dispatch(action);
            console.log(store.getState());
            return result;
        }

        return { ...store, dispatch: newDispatch }
    }
}
