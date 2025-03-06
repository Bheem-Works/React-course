import React, {useState} from 'react';

function Color () {
    const [color,setColor] = useState ("#ffffff");

    function changeColor (event) {
        setColor(event.target.value);
    }

    return(
        <div className = "colorChange">
            <p>Select Color</p>
            <div style = {{backgroundColor:color}}>
                <p>Selected the color : {color}</p>
            </div>
            <label>
                Select color : 
            </label>
            <input type="color" onChange = {changeColor}  value ={color}/>
        </div>
    );
}

export default Color