import React from 'react';
import { useState, useEffect } from 'react';
import DeleteIcon from '../icons/DeleteIcon';

const ToDo = () => {
    const [taskInput, setTaskInput] = useState('');
    const [tasks, setTasks] = useState(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        return storedTasks || [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const updateTask = (index, updatedTask) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = updatedTask;
        setTasks(updatedTasks);
    };

    const handleTaskInput = (e) => {
        setTaskInput(e.target.value);
    };

    const addTask = () => {
        if (taskInput.trim() === '') return;
        const currentTime = new Date().getTime();
        const newTask = {
            id: new Date().getTime(),
            title: taskInput,
            isDone: false,
            createdAt: currentTime,
            modifiedAt: currentTime,
        };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setTaskInput('');
    };

    return (
        <div className='flex flex-col items-center mt-10'>
            <div className='flex justify-between'>
                <input type="text" placeholder="Buy Groceries..." name="taskInput" value={taskInput} onChange={handleTaskInput} className="input input-bordered input-primary w-full max-w-xs" />
                <button onClick={addTask} className='btn btn-primary ml-5'>Add Task</button>
            </div>
            <h3 className='text-3xl p-8 font-semibold'>Tasks</h3>
            <div className='flex flex-col items-center justify-center flex-wrap'>
                {tasks.length ? tasks.map((task, index) => (
                    <div key={task.id} className='flex justify-evenly items-center rounded border border-solid border-primary p-6 h-30 w-[300px] md:w-[550px] lg:w-[800px] mt-2'>
                        <input
                            type="checkbox"
                            checked={task.isDone}
                            name="isDone"
                            className="checkbox checkbox-primary"
                            onChange={(e) =>
                                updateTask(index, { ...task, isDone: e.target.checked, modifiedAt: new Date().getTime() })
                            }
                        />
                        <div className='px-4 truncate ...'>{task.isDone ? <s>{task.title}</s> : <>{task.title}</>}</div>
                        <button onClick={() => deleteTask(index)} className="btn btn-ghost">
                            <DeleteIcon height={20} width={20} color={"red"} />
                        </button>
                    </div>
                )) : "No tasks available..."}
            </div>
        </div>
    );
}

export default ToDo;