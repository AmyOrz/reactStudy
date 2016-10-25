import * as React from "react";
import {ContentList} from "./contentList";
import {DataService} from "../util/DataUtil";

interface ContentState{
    list:any;
}
interface ContentProps{}
export class Content extends React.Component<ContentProps,ContentState>{
    public state:ContentState;
    constructor(props:ContentProps){
        super(props);
        this.state = {list:[]};
    }
    public componentDidMount:()=>void = ():void=>{
        let dataService = new DataService();
        dataService.get("./text.json").then((result:string)=>{
             this.setState({list:result});
        });
    };
    render(){
        let ContentLog:any;
        if(this.state.list){
            ContentLog = this.state.list.map(function(log){
                return (
                    <div>
                        <ContentList data={log} />
                    </div>
                )
            });
        }
        return (
            <div>{ContentLog}</div>
        )
    }
}