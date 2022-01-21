import React from 'react'
import TaskItem from './TaskItem'

// const deleteTask = (idx) => {
//     tasks.filter((tk,i) => i != idx);
// };

const TaskList = ({tasks,deleteTask,toggleDone}) => {
    return (
        <div>
            <ul>
                {tasks.map((task,idx) => {
                    return <TaskItem key={idx} index={idx} taskObj={task} deleteTask={deleteTask} toggleDone={toggleDone} />
                })}
            </ul>
        </div>
    )
}

export default TaskList
