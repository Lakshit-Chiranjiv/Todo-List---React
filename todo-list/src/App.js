import './App.css';
import React ,{ useState} from 'react';
import { FaClipboardList } from "react-icons/fa";
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import WholeTodo from './components/WholeTodo';

function App() {

  const [todoList,setTodoList] = useState([]);
  const [currentTask,setCurrentTask] = useState("");
  
  const addTask = () =>{
    if(currentTask)
      setTodoList([...todoList,{todoName:currentTask,todoStatus:false}]);
  }

  const setTypedTask = (value) =>{
    setCurrentTask(value);
  }

  const deleteTask = (idx) => {
      setTodoList(todoList.filter((tk,i) => i !== idx));
  };

  const toggleDone = (idx) => {
    let newList = todoList;
    newList[idx].todoStatus = !newList[idx].todoStatus;
    setTodoList([...newList]);
}

 const clearTasks = () => {
   let emptyArr = todoList;
   emptyArr = [];
   setTodoList([...emptyArr]);
 }

  return (
    // <WholeTodo/>
    <div className="App container">
      <h1 className='m-5'>Todo List App <FaClipboardList/> </h1>
      <AddTask addTask={addTask} setTypedTask={setTypedTask} clearTasks={clearTasks} />
      <TaskList tasks={todoList} deleteTask={deleteTask} toggleDone={toggleDone} />

    </div>
  );
}

export default App;


