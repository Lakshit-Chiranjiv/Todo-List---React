import React,{ useState,useRef } from 'react';
import { FaTrash } from "react-icons/fa";
import './../css/TaskItem.style.css';

const TaskItem = ({taskObj,index,deleteTask,toggleDone}) => {

    const taskRef = useRef(null);
    const markBtnRef = useRef(null);


    return (
        <div ref={taskRef} className={taskObj.todoStatus?"w-75 p-3 text-white rounded px-5 task-instance done":"w-75 p-3 text-white rounded px-5 task-instance undone"}>
            <p>{taskObj.todoName}</p>
            <div className="task-btns">
                <button className='btn btn-warning btn-sm mx-3 w-100 h-75 mark-btn' onClick={() => {
                    toggleDone(index);
                }} ref={markBtnRef} >{taskObj.todoStatus?"Mark as Undone":"Mark as Done"}</button>
                <button className='btn btn-danger btn-sm mx-3 w-50 h-75 del-btn' onClick={() => {
                    deleteTask(index);
                }} >Delete</button>
                {/* <a className='del-icon' href="#" onClick={() => {
                    deleteTask(index);
                }}><FaTrash/></a> */}
            </div>
        </div>
    )
}

export default TaskItem;
