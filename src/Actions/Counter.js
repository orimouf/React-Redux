import ActionTypes from '../Actions/index'

export const increaseCount = () => ({
    type: ActionTypes.INCREASE_COUNT
})

export const decreaseCount = () => ({
    type: ActionTypes.DECREASE_COUNT
})

export const resetCount = () => ({
    type: ActionTypes.RESET_COUNT
})