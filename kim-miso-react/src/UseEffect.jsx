import React, {useState,useEffect} from 'react';

function MisoEffect() {
    const[count,setCount] = useState(0);
    const [color,setColor] = useState("");

    useEffect(()=>{
        document.title = `${count} ${color}`;   
        return()=>{
        };

    },) 
    function addCount() {
        setCount( c => c +1);
    }
    function addColor () {
        setColor (c=> c==="green"? "blue" : "green");
    }

    return (
    <div>
        <button onClick={addCount}>Plus</button>
        <p style={{color:color}}>The color of the count is {count} </p>
        <button onClick={addColor}>
            addColor
        </button>
    </div>);
}

export default MisoEffect;