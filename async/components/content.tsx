import * as React from "react";
import ContentList from "./contentList";
interface ContentProps{
    list:any
}
export default class Content extends React.Component<ContentProps,any>{
    constructor(props:ContentProps){
        super(props);
    }
    render(){
        let ContentLog:any;
            ContentLog = this.props.list.map(function(log){
                return (
                    <div>
                        <ContentList data={log} />
                    </div>
                )
            });
        return (
            <div>{ContentLog}</div>
        )
    }
}