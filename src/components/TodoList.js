import React, {useState} from "react";
import Todo from "./Todo";
import {selectAllTodo} from "../redux/action";
import {useDispatch} from "react-redux";
import FiltersTodo from "./FiltersTodo";

export default function TodoList ({todos, children}) {
    const dispatch = useDispatch()
    const [filters, setFilters] = useState('')
    const [checkedAll, setCheckedAll] = useState(false)
    const change = () => {
        dispatch(selectAllTodo(checkedAll))
        setCheckedAll(!checkedAll)
    }
    const changeFilter = (filter) => setFilters(filter)
    const TodosFilter = (todos, filter='') => filter === '' ? todos : todos.filter(todo => todo[filter] )

    if (!todos.length) {
        return <p>{children}</p>
    }

    return (
        <>
            <ul className={"todo-list"}>
                {
                    TodosFilter(todos, filters).map((todo, i) => <Todo todo={todo} key={i} />)
                }
                <li className={"todo-list__item"}>
                    <label>
                        <input
                            type="checkbox"
                            checked={checkedAll}
                            onChange={change}
                        />
                        select all
                    </label>
                </li>
                <FiltersTodo  changeFilter={changeFilter} value={filters} />
            </ul>
        </>
    )
}
