import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* import { add } from './calculator';
console.log(add(100,200)); */

/* import calc from './calculator';

console.log(calc);

ReactDOM.render(<App />, document.getElementById('root')); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

import { bindActionCreators } from 'redux';
import * as spinnerActionCreators from './spinner/actions';
import appStore from './store';
import Spinner from './spinner';

let spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, appStore.dispatch);

function renderApp() {
    let value = appStore.getState();
    ReactDOM.render(
        <Spinner value={value} {...spinnerActionDispatchers} />,
        document.getElementById('root'));
}
renderApp();
appStore.subscribe(renderApp);

serviceWorker.unregister();
