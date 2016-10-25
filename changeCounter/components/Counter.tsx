import * as React from "react";
interface CounterProps{
    Counter:number;
}
export default class Counter extends React.Component<CounterProps,any>{
    constructor(props:CounterProps){
        super(props);
    }
    render(){
        const {changeCount,Counter,undo,redo} = this.props;
        return(
            <div>
                <p>
                    <label>Counter: </label>
                    <b>#{Counter}</b>
                </p>
                <button onClick={()=>changeCount(1)}>INCREMENT</button>
                <span style={{ padding: "0 5px" }} />
                <button onClick={()=>changeCount(-1)}>DECREMENT</button>

                <button onClick={undo}>Undo</button>
                <span> </span>
                <button onClick={redo}>Redo</button>
            </div>
        )
    }
}