export const CHANGE_COUNT:string = "CHANGE_COUNT";
export const UNDO_COUNT:string = "UNDO_COUNT";
export const REDO_COUNT:string = "REDO_COUNT";

export function changeCount(step){
    return {
        type:CHANGE_COUNT,
        step
    }
}
export function undo(){
    return {
        type:UNDO_COUNT
    }
}
export function redo(){
    return {
        type:REDO_COUNT
    }
}
