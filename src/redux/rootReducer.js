import {combineReducers} from "redux";
import {ADD, UPDATE, DELETE, SELECTED, SELECTED_ALL, DONE, DELETE_SELECTED, DONE_SELECTED } from "./bollerplate";

// function initialState() {
//     return {todos: []}
// }
const initTodoState = {
    todosList: [] //{id: 1, todo: "dasdas", selected: false, done: false, filtersVisible: true}
};

export const rootReducer = combineReducers({
    todos: todoReducer,
})

function todoReducer (state = initTodoState, action ) {
    switch (action.type) {
        case ADD:
            return ({
                ...state,
                todosList: [...state.todosList, action.payload]
            })
        case UPDATE:
            return ({
                ...state,
                todosList: state.todosList.map(todo=> {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            text: action.payload.text
                        }
                    } else {
                        return todo
                    }
                })
            })
        case SELECTED:
            return {
                ...state,
                todosList: state.todosList.map(todo => todo.id !== action.payload.id ? todo : {
                    ...todo,
                    selected: !todo.selected
                })
            }
        case SELECTED_ALL: {
            if (!action.payload) {
                return {
                    ...state,
                    todosList: state.todosList.map(todo => todo.selected ? todo : {...todo, selected: true})
                }
            } else {
                return {
                    ...state,
                    todosList: state.todosList.map(todo => !todo.selected ? todo : {...todo, selected: false})
                }
            }
        }

        case DELETE:
            return {
                ...state,
                todosList: state.todosList.filter(todo => todo.id !== action.payload.id)
            }
        case DONE:
            return {
                ...state,
                todosList: state.todosList.map(todo => todo.id === action.payload.id ? {
                    ...todo,
                    done: true
                } : todo)
            }
        case DELETE_SELECTED:
            return {
                ...state,
                todosList: state.todosList.filter(todo => !todo.selected)
            }
        case DONE_SELECTED:
            return {
                ...state,
                todosList: state.todosList.map(todo => !todo.selected ? todo : {...todo, done: true})
            }
        default:
            return state
    }
}