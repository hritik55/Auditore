import * as types from '../actions/actionTypes'
import initialState from './initialState'


export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ALL:
            return {
                ...state,
                list: [action.payload]
            }
        case types.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case types.UPDATE:
            return {
                ...state,
                list: state.list.map(x => x._id == action.payload._id ? 
                    action.payload : x)
            }
        case types.DELETE:
            return {
                ...state,
                list: state.list.filter(x => x._id != action.payload)
            }
        default:
            return state;
    }
}
