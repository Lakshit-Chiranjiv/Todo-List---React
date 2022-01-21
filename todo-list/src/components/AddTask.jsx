import React ,{ useState} from 'react'

const AddTask = ({addTask,setTypedTask,clearTasks}) => {


  return (
  <div className='top-bar'>
      <input type="text" className="form-control w-50 p-2 d-inline" placeholder='Add New Task!!' onChange={(e) => setTypedTask(e.target.value)}/>
      <button type="submit" className="btn btn-primary mx-3 w-25" onClick={addTask}>Add</button>
      <button className="btn btn-primary mx-3 px-5" onClick={clearTasks}>Clear</button>
      <hr />
  </div>
  );
};

export default AddTask;
