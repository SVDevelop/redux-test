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
        <li className={"todo-list__item"}>
            <input
                id={`check_${id}`}
                type="checkbox"
                checked={selected}
                onChange={()=> {
                    dispatch(selectTodo(id))
                }}

            />
            <label htmlFor={`check_${id}`}>
                {
                    !done ?
                        <input className="todo__title" type='text' onClick={changeValue} value={text} onChange={(e) => dispatch(updateTodo(id, e.target.value))} /> :
                        <span className="todo__title done">{text}</span>
                }
            </label>


        <BottonsTodo todo={todo} changeValue={changeValue} />
    </li>
    )
}
//