import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteTodo, doneTodo, updateTodo} from "../redux/action";

export default function BottonsTodo ( props ) {
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch()
    const { id, text, changeValue } = props.todo
    return (
        <>
            {/*<button onClick={() => changeValue() }>{!edit ? 'edit' : 'save' }</button>*/}
            <button onClick={() => dispatch(doneTodo(id)) }>done</button>
            <button onClick={() => dispatch(deleteTodo(id)) }>delete</button>
        </>
    )
}

//dispatch(updateTodo(id, text)