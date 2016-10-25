import * as React from "react";
import {Provider} from "react-redux";
import configStore from "../store/configStore";
import AsyncApp from "./AsyncApp";

const store = configStore();
export default class App extends React.Component<any,any>{
    render(){
        return (
            <Provider store = {store}>
                <AsyncApp />
            </Provider>
        )
    }
}