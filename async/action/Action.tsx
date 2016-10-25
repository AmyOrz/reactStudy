import {DataService} from "../util/DataUtil";
export const REQUEST_POSTS:string = "REQUEST_POSTS";          //请求post
export const RECEIVE_POSTS:string = "RECEIVE_POSTS";          //响应post
const ajax:any = new DataService();

//开始获取新闻action
const requestPosts = () => {
    return {
        type: REQUEST_POSTS,
    }
};
//获取新闻成功的action
const receivePosts = (json) => {
    return {
        type: RECEIVE_POSTS,
        posts: json,
        receivedAt: Date.now()
    }
};

//获取文章，先触发requestPosts开始获取action，完成后触发receivePosts获取成功的action
const fetchPosts = () => {
    return dispatch => {
        dispatch(requestPosts());
        return ajax.get("./text.json")
            .then((result:any)=>{
                dispatch(receivePosts(result))
            });
    }
};

//如果需要则开始获取文章
export const fetchPostsIfNeeded = () => {
    return (dispatch) => dispatch(fetchPosts())
};