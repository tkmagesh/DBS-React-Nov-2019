import { createStore, combineReducers, applyMiddleware } from 'redux';
import spinnerReducer from '../spinner/reducers';
import bugsReducer from '../bugTracker/reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    spinnerState : spinnerReducer,
    bugsState : bugsReducer
});

var appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;
