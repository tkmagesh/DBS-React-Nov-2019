import { createStore, combineReducers } from 'redux';
import spinnerReducer from '../spinner/reducers';
import bugsReducer from '../bugTracker/reducers';

const rootReducer = combineReducers({
    spinnerState : spinnerReducer,
    bugsState : bugsReducer
});

var appStore = createStore(rootReducer);

export default appStore;
