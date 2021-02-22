import initialStore from "./store";
import * as actionTypes from './actionTypes'

export default function reducer(state = initialStore, action) {
    switch (action.type) {
        case actionTypes.SET_INGREDIENTS:
            return {
                pog: true
            }
        default:
            return state
    }
}