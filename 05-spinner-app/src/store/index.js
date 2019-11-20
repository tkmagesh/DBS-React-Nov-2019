import { createStore } from 'redux';
import spinnerReducer from '../spinner/reducers';

var appStore = createStore(spinnerReducer);

export default appStore;
