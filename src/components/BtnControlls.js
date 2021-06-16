import {useDispatch} from "react-redux";
import { deleteTodoSelected, doneTodoSelected } from "../redux/action";


export default function BtnControlls ({todos}) {
    const dispatch = useDispatch()

    if (todos.some(todo=>todo.selected)) {
        return (
            <>
                <button onClick={() => dispatch(deleteTodoSelected())}>delete</button>
                <button onClick={() => dispatch(doneTodoSelected())}>done</button>
            </>
        )
    }
    return null
}