import React from "react";
import Todo from "./Todo";

export default function TodoList ({todos, children}) {

    if (!todos.length) {
        return <p>{children}</p>
    }
    return (
        <ul>
            {
                todos.map((todo, i) => <Todo todo={todo} key={i} />)
            }
        </ul>
    )
}
