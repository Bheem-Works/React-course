import React, {useState} from 'react';

function AddTask() {
    const [aTask,aUpdatedTask] = useState ("");
    const [bTask,addBtask] = useState ([]);
    function changeInput (event) {
        aUpdatedTask(event.target.value);
        
    }
    function addTask() {
        if(aTask.trim() !== "") {
            addBtask((t)=> [...t,aTask]);
            aUpdatedTask("");
        }
    }
    return(
        <div>
            <h1>Adding list </h1>
            <input type="text" onChange={changeInput}  value={aTask}/>
            <button onClick={addTask}>AddTask</button>
            {/* <p>{aTask}</p> */}

            <ul>
                {bTask.map((task,index)=>(
                    <li key={index}>{task}</li>
))}
            </ul>
        </div>
    );
}
export default AddTask;