let SM = (function(){
    let _currentState = undefined,
        _subscribers = [],
        _reducer = null,
        __init_action = { type : '@@INIT/ACTION' };

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        _subscribers.push(callback);
    }

    function dispatch(action){
        let newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        triggerChange();
    }

    function triggerChange(){
        _subscribers.forEach(callback => callback());
    }

    function createStore(reducer){
        _reducer = reducer;
        _currentState = _reducer(_currentState, __init_action);
        return { getState, subscribe, dispatch };
    }

    function bindActionCreators(actionCreators, dispatch) {
        let actionDispatchers = {};
        for (let key in actionCreators) {
            actionDispatchers[key] = function () {
                let action = actionCreators[key].apply(undefined, arguments);
                dispatch(action);
            }
        }
        return actionDispatchers;
    }

    return { createStore, bindActionCreators };
})();