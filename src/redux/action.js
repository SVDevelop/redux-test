import {ADD, DELETE, UPDATE, SELECTED, SELECTED_ALL, DONE, DELETE_SELECTED, DONE_SELECTED} from "./bollerplate";
import { v4 as uuid } from 'uuid'


export const addTodo = (value) => ({
    type: ADD,
    payload: {
        id: uuid(),
        text: value,
        selected: false,
        done: false
    }
})

export const updateTodo = (id, value) => ({
    type: UPDATE,
    payload: {
        id,
        text: value,
    }
})

export const selectTodo = (id) => ({
    type: SELECTED,
    payload: {
        id,
    }
})

export const selectAllTodo = (checked) => ({type: SELECTED_ALL, payload: checked})

export const deleteTodo = (id) => ({
    type: DELETE,
    payload: {
        id
    }
})

export const doneTodo = (id) => ({
    type: DONE,
    payload: {
        id
    }
})

export const deleteTodoSelected = () => ({
    type: DELETE_SELECTED,
})

export const doneTodoSelected = () => ({
    type: DONE_SELECTED,
})

