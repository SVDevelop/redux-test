import React from "react";

export default function AddTodo (props) {
    return <input type="text" onKeyUp={props.onKeyUp} value={props.value} onChange={props.onChange}/>
}