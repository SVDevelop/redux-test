import React from "react";

export default function FiltersTodo ({changeFilter, value}) {

    return (
        <li className={"todo-list__item"}>
            <button className="filters__btn" disabled={value === 'done'} onClick={()=>changeFilter('done')}>done</button>
            <button className="filters__btn" disabled={value === 'selected'} onClick={()=>changeFilter('selected')}>selected</button>
            <button className="filters__btn" disabled={value === ''} onClick={()=>changeFilter('')}>all</button>
            {/*<button className="todo-filters__btn"></button>*/}
            {/*<button className="todo-filters__btn"></button>*/}
        </li>
    )
}