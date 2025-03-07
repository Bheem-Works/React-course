import React, {useState} from 'react';

function MisoList() {
    // creating a varaibles to store the arrays and the inputs  
    const [aTask,setATasks] = useState("");
    const [bTask,setBTasks] = useState([]);

    // now input function function to take a input value 
    function inputChange(e) {
        setATasks(e.target.value);
    }
    // The Add function 
    function addButton() {
        if(aTask.trim() !== "") {
            setBTasks ((t)=> [...t,aTask]);
            setATasks("");
        }
    }
    return (<div>
        <h1>Miso List</h1>
        <input type="text" value={aTask} onChange={inputChange} />
        <button onClick={addButton}>Miso Add</button>

        <ul>
    {bTask.map((item,index)=>(
        <li key={index}>{item}</li>
    ))}    
    </ul>

    </div>
);
}
export default MisoList