let SM = (function(){
    let _currentState = null,
        _subscribers = [],
        _reducer = null;

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
        return { getState, subscribe, dispatch };
    }

    return { createStore };
})();