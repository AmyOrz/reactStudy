import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Head from "./components/head";
import Foot from "./components/foot";

import App from "./containers/App";
import countApp from "./reducers/reducer";

let store = createStore(countApp);
ReactDOM.render(
    <div>
        <Head head = "hello,miller" />
        <Provider store = {store}>
            <App />
        </Provider>
        <Foot />
    </div>,
    document.querySelector("#ct")
);