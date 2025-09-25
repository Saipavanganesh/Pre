import React, { useState } from 'react'
import "./Easy.css"

const Todo = () => {
    const [input, setInput] = useState("")
    const [tasks, setTask] = useState([])
    const [editId, setEditId] = useState(null)

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleAddTask = () => {
        if (input.trim() === "") return;
        if (editId !== null) {
            setTask(tasks.map(t => t.id === editId ? { ...t, task: input } : t))
            setEditId(null)
        } else {
            setTask([...tasks, { id: tasks.length + 1, task: input }]);
        }
        setInput("");
    }

    const handleEdit = (id) => {
        const toEdit = tasks.find(t => t.id === id)
        setInput(toEdit.task)
        setEditId(id)
    }

    const handleDelete = (id) => {
        setTask(tasks.filter(t => t.id !== id))
        if (editId === id) {
            setEditId(null)
            setInput("")
        }
    }
    return (
        <div>
            <input type="text" placeholder='Enter a task' className='todo-input' onChange={handleChange} value={input} />
            <button className='todo-add' onClick={handleAddTask}>Add Task</button>
            <table className='todo-table'>
                <thead className='todo-thead'>
                    <tr>
                        <th className='todo-th'>Id</th>
                        <th className='todo-th'>Task</th>
                        <th className='todo-th'>Actions</th>
                    </tr>
                </thead>
                <tbody className='todo-body'>
                    {
                        tasks.map((t) => {
                            return (
                                <tr key={t.id}>
                                    <td>{t.id}</td>
                                    <td>{t.task}</td>
                                    <td>
                                        <button className='todo-add' onClick={() => handleEdit(t.id)}>Edit</button>
                                        <button className='todo-add' onClick={() => handleDelete(t.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Todo