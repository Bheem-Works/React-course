// Creating a ToDoList By using the useEffects

import React, {useState} from 'react';

function MisoTask () {
    const [task,setTask] = useState (["Eat","sleep","walk"]);
    const [newTask,setNewTask] = useState ("");

        function handleInputChange(event) {
            addTask(event.target.value);
        }

    function addList() {
        if(newTask.trim() !== "") {
            setTask(t => [...t,newTask])
            setNewTask("");
        }
    }
    function handleKeyPress(event) {
        if(event.key === "Enter" ){
            addList();
        }
    }
    function removeTask(index) {
        const updatedTasks = task.filter((_,i)=> i !== index);
        setTask(updatedTasks)
    }
    function moveUp(index) {
        if(index > 0) {
            const updatedTasks = [...task];
            [updateTasks [index], updatedTasks[index-1]] =
            [updateTasks [index-1], updatedTasks[index]];
            setTask(updateTasks);
        }
    }
    function moveDown(index) {
        if (index < task.length - 1) {
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return(<div className = "to-do-list">
        <div>
            <h1>To-Do-Lists</h1>
            <input type="text" placeholder="add new tasks...." value={newText} onChange={handleInputChange} 
                onKeyPress={handleKeyPress}
            />

            <button onClick={addList}>Add</button>
        </div>
        {taks.map((task,index)=>{
            <li key={index}>
                <span>{task}</span>
                <div className="task-button">
                <button className="delete-button" onClick={() => removeTask(index)}>Delete</button> 
                            <button className="moveUp-button" onClick={() => moveUp(index)}>Move Up</button> 
                            <button className="moveDown-button" onClick={() => moveDown(index)}>Move Down</button>
                </div>
            </li>
        })}

    </div>);
}

export default MisoTask;



