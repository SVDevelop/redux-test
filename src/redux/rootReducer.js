import {combineReducers} from "redux";

function initialState() {
    return []
}

export const rootReducer = () => combineReducers(initialState)