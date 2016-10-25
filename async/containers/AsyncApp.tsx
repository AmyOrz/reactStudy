import * as React from "react";
import {connect} from "react-redux";
import Content from "../components/content";
import {fetchPostsIfNeeded} from "../action/Action";
interface AppProps{
    posts:any;
    isFetching:any;
    lastUpdated:any;
}
class AsyncApp extends React.Component<AppProps,any>{
    constructor(props:AppProps){
        super(props);
    }
    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(fetchPostsIfNeeded());
    }
    render(){
        const {item,isFetching,lastUpdated} = this.props.posts;
        return (
            <div>
                <p>
                    {lastUpdated &&
                    <span>
                        Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                        {' '}
                    </span>
                    }
                </p>
                {isFetching && item != void 0 && item.length === 0 &&
                    <h2>loading...</h2>
                }
                {!isFetching && item != void 0 && item.length === 0 &&
                    <h2>Empty</h2>
                }
                {
                    !isFetching && item != void 0 && item.length > 0 &&
                    <Content list = {item}/>
                }
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        posts:state.postAction
    }
}
export default connect(mapStateToProps)(AsyncApp);