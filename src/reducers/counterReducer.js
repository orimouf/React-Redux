import ActionTypes from '../Actions/index'
const initialState = {
    count: 0
}
export default function counterReducer (state = initialState, action){
    switch(action.type) {
        case ActionTypes.INCREASE_COUNT:
            return {count: state.count + 1}
        case ActionTypes.DECREASE_COUNT:
            return {count: state.count - 1}
        case ActionTypes.RESET_COUNT:
            return {count: 0}
        default:
            return state
    }
}