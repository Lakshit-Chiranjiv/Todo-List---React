import React from 'react'
import './../css/TaskItem.style.css';

const TaskItem = () => {
    return (
        <div className="bg-success w-75 p-3 text-white rounded task-instance">
            {/* <div className="status"></div> */}
            <p>Task 1</p>
            <button>Mark as Done</button>
        </div>
    )
}

export default TaskItem;
