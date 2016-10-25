import {createStore,applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
const logger = ({getState}) => {
    return (next) => (action) => {
        console.log('will dispatch', action)

        // 调用 middleware 链中下一个 middleware 的 dispatch。
        let returnValue = next(action)

        console.log('state after dispatch', getState())

        // 一般会是 action 本身，除非后面的 middleware 修改了它。
        return returnValue
    }
}

const storeWithMiddle:any = applyMiddleware(
    thunkMiddleware,
    logger
)(createStore);

const configStore = (initialState?:any):any => {
    return storeWithMiddle(rootReducer,initialState);
}
export default configStore;