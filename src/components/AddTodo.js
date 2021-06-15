import React from "react";

export default function AddTodo (props) {
    return <input type="text" {...props} value={props.value} onChange={props.change}/>
}