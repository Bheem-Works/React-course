import React, {useState} from 'react';

function Input () {
    
    const [value,setValue] = useState("");
    const [radio,setRadio] = useState("");
    
    function onChangeValue (e) {
        setValue(e.target.value);
    }
    function onChangeRadio (e) {
        setRadio(e.target.value);
    }
    return( 
        <div>
            <input type= {value} onChange = {onChangeValue} />
            <p>{value}</p>

            <label> 
                <input type={radio} value = "pick up" 
                checked = {shipping == "pick up"} onChange = {onChangeRadio}  />
            </label> <br />

                <label>
            <input type={radio} value = "delivery" 
                checked = {shipping == "delivery"} onChange = {onChangeRadio}  />
                    
            </label>

        </div>
    );  
}

export default Input;
