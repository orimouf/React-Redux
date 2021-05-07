import Action from '../Actions/index'
const initialState = {
    count: 0
}
export default function counterReducer (state = initialState, action){
    switch(action.type) {
        case Action.INCREASE_COUNT:
            return {count: state.count + 1}
        case Action.DECREASE_COUNT:
            return {count: state.count - 1}
        case Action.RESET_COUNT:
            return {count: 0}
        default:
            return state
    }
}