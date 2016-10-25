import {REQUEST_POSTS, RECEIVE_POSTS} from '../action/Action';

const postAction = (state = {
    isFetching: false,
    item: []
}, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return Object.assign({},state,{
                isFetching: true
            });
        case RECEIVE_POSTS:
            return Object.assign({},state,{
                isFetching: false,    //进度条
                item: action.posts,    //存放列表
                lastUpdated: action.receivedAt   //存放数据最后时间
            })
        default:
            return state
    }
};
export default postAction;