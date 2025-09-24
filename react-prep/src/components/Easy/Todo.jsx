import React, { useState } from 'react'
import "./Easy.css"

const Todo = () => {
    const [task, setTask] = useState({
        task: ""
    })
    const handleChange = (e) => {
        setTask(e.target.value)
    }
    return (
        <div>
            <input type="text" placeholder='Enter a task' className='todo-input' onChange={handleChange} />
            <button className='todo-add'>Add Task</button>
            <table className='todo-table'>
                <thead className='todo-thead'>
                    <th className='todo-th'>Id</th>
                    <th className='todo-th'>Task</th>
                    <th className='todo-th'>Actions</th>
                </thead>
                <tbody className='todo-body'>
                    {
                        task.map((t) => {
                            <tr>{t.task}</tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Todo