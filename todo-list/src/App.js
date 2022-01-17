import './App.css';
import React ,{ useState} from 'react'
import TaskItem from './components/TaskItem';

function App() {

  const [todoList,setTodoList] = useState([]);
  const [currentTask,setCurrentTask] = useState("");
  
  const addTask = () =>{
    setTodoList([...todoList,currentTask]);
  }

  return (
    <div className="App container">
      <h1 className='m-5'>Todo List App</h1>

      <input type="text" className="form-control w-50 p-2 d-inline" placeholder='Add New Task!!' onChange={(e) => setCurrentTask(e.target.value)}/>
      <button type="submit" className="btn btn-primary mx-3 w-25" onClick={addTask}>Add</button>
      <hr />

      <TaskItem/>
      {/* {
        displayToggle && 
      <div className=ame="details">

      </div>
      } */}
    </div>
  );
}

export default App;
