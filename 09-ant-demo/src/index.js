import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";

// importing application global store
import { store, persistor } from "./helpers";

// importing defalt ant design styles
import "antd/dist/antd.css";

// importing react toastify styles
import "react-toastify/dist/ReactToastify.css";

// importing global Application styles
import "./global.scss";

// importing root application container
import App from "./containers/app";

// root node to render our application
const target = document.getElementById("root");

render(<App store={store} storePersistor={persistor} />, target);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
