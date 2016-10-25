import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router,Route,hashHistory} from "react-router";
import {Content} from "./components/content";

ReactDOM.render(
    <Router history = {hashHistory}>
        <Route path = "/" component = {Content} />
    </Router>,
    document.querySelector("#ct")
);
