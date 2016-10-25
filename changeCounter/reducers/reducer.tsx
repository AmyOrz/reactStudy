import {combineReducers} from "redux";
import {CHANGE_COUNT,UNDO_COUNT,REDO_COUNT} from "../action/Action";
import undoable,{includeAction} from "redux-undo";

const initialState:any = {       //初始化state
    Counter:0
};

function countApp(state = initialState,action):any{
    switch(action.type){
        case CHANGE_COUNT:return Object.assign({},state,{Counter:state.Counter+action.step});
        default:return state;
    }
}

const rootApp = combineReducers({
    countApp:undoable(countApp,{
        filter:includeAction([CHANGE_COUNT]),
        debug:true,
        undoType:UNDO_COUNT,
        redoType:REDO_COUNT
    })
})
export default rootApp;

