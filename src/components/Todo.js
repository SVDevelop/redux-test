import React, { useState} from "react";
import BottonsTodo from "./BottonsTodo";
import {useDispatch} from "react-redux";
import {updateTodo, selectTodo} from "../redux/action";


export default function Todo ({todo}) {
    const dispatch = useDispatch()
    const [contentEdit, setContentEdit] = useState({
        editable: false,
        currentValue: todo.text
    })
    const changeValue = (e) => {
        if (!contentEdit.editable) {
            setContentEdit(prevState => ({
                ...prevState,
                editable: true,
                currentValue: e.target.value
            }))
        }
    }
    const { selected, done, text, id } = todo
    return (
        <li>
            <input
                id='check'
                type="checkbox"
                checked={selected}
                onChange={()=> {
                    dispatch(selectTodo(id))
                }}

            />
            <label htmlFor="check">
                <input type='text' onClick={changeValue} value={text} onChange={(e)=>dispatch(updateTodo(id, e.target.value))} />
            </label>


        <BottonsTodo todo={todo} changeValue={changeValue} />
    </li>
    )
}