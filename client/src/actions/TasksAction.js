import api from '../api'
import * as types from './actionTypes'

export const fetchAllTasks = () => dispatch => {
    api.postTask().fetchAll()
        .then(res => {
            console.log('Into Action')
            dispatch({
                type: types.FETCH_ALL,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const createTask = (data) => dispatch => {
    api.postTask().create(data)
        .then(res => {
            dispatch({
                type: types.CREATE,
                payload: res.data
        })
    })
        .catch(err => console.log(err))
}
export const updateTask = (data) => dispatch => {
    api.postTask().create(data)
        .then(res => {
            dispatch({
                type: types.UPDATE,
                payload: res.data
        })
    })
        .catch(err => console.log(err))
}
export const deleteTask = (data) => dispatch => {
    api.postTask().create(data)
        .then(res => {
            dispatch({
                type: types.DELETE,
                payload: res.data
        })
    })
        .catch(err => console.log(err))
}

