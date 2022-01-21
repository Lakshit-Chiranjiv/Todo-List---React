import React ,{ useState} from 'react';
import '../css/WholeTodo.style.css';

const WholeTodo = () => {

    const [todoList,setTodoList] = useState([]);
    const [currentTask,setCurrentTask] = useState("");
    
    const addTask = () =>{
      if(currentTask)
        setTodoList([...todoList,{todoName:currentTask,todoStatus:false}]);
    }

    const checkList = () => console.log(todoList);
  
    const deleteTask = (idx) => {
        setTodoList(todoList.filter((tk,i) => i !== idx));
    };
  
    const toggleDone = (idx) => {
        let newList = todoList;
        newList[idx].todoStatus = !newList[idx].todoStatus;
        setTodoList([...newList]);
    }

  return (
    <div className="App container">
      <h1 className='m-5'>Todo List App</h1>

      <input type="text" className="form-control w-50 p-2 d-inline" placeholder='Add New Task!!' onChange={(e) => setCurrentTask(e.target.value)}/>
      <button type="submit" className="btn btn-primary mx-3 w-25" onClick={addTask}>Add</button>
      <hr />
      <button onClick={checkList}>check</button>

      <div className="show-list">
          <ul>
              {todoList.map((todo,i) => {
                 return <li key={i}>
                      <div className={todo.todoStatus?"done eachtodo":"undone eachtodo"}>
                          <p className={todo.todoStatus?"nm":""} >{i}, {todo.todoName}</p>
                          <p>{todo.todoStatus?"true":"false"}</p>
                          <button onClick={()=>{toggleDone(i)}} >Mark</button>
                          <button onClick={()=>{deleteTask(i)}} >Delete</button>
                      </div>
                  </li>
              })}
          </ul>
      </div>
    </div>
  );
};

export default WholeTodo;
