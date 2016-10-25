import * as React from "react";
import {connect} from "react-redux";
import * as CountAction from "../action/Action";
import Counter from "../components/Counter";
import {bindActionCreators} from "redux";

class App extends React.Component<any,any>{
    render(){
        const {dispatch,CounterNum} = this.props;
        const boundAction = bindActionCreators(CountAction,dispatch);
        return (
            // {<Counter Counter = {CounterNum} add = {(step)=>dispatch(changeCount(step))} del = {(step)=>dispatch(changeCount(step))} />}
            <Counter Counter = {CounterNum} {...boundAction} />
        )
    }
}
const mapStateToProps  = (state)=>{
    console.log(state)
    return {
        CounterNum:state.countApp.present.Counter    //临时使用state。不再store中.
    }
};
export default connect(mapStateToProps)(App);
