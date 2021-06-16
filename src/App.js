import './App.css';
import {useState} from "react";
import AddTodo from "./components/AddTodo";
import {useDispatch, useSelector} from "react-redux";
import TodoList from "./components/TodoList";
import {addTodo, updateTodo, deleteTodo} from "./redux/action";
import BtnControlls from './components/BtnControlls'


function App() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.todosList)
  // const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const change = (e) => {
    setValue(e.target.value)
  }
  const onKeyUp = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      dispatch(addTodo(value))
      setValue('')
    }
  }
  const deleteTodo = (id) => dispatch(deleteTodo(id))
  const updateTodo = (id, text) => dispatch(updateTodo(id, text))

  return (
    <div className="App">
      <AddTodo value={value} onChange={change} onKeyUp={onKeyUp} />
      <BtnControlls todos={todos} />
      <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
      >
        no todo
      </TodoList>
    </div>
  );
}

export default App;
