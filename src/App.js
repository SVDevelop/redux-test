import './App.css';
import {useState} from "react";
import AddTodo from "./components/AddTodo";

function App() {
  const [value, setValue] = useState()
  const change = (e) => setValue(e.target.value)
  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      console.log('value: ', e.target.value)
      setValue('')
    }
  }
  return (
    <div className="App">
      <AddTodo value={value} onChange={change} onKeyUp={onKeyUp} />
    </div>
  );
}

export default App;
