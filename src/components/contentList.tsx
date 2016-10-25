import * as React from "react";
interface ListProps{
    data:any
}
export default class ContentList extends React.Component<ListProps,any>{
    constructor(props:ListProps){
        super(props);
    }
    render(){
        return(
          <div>
              <div>{this.props.data.name}</div>
              <div>{this.props.data.age}</div>
              <div>{this.props.data.liked}</div>
          </div>
        );
    }
}