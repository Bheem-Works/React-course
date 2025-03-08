import React,{useState,useRef} from 'react'

const TimerClock = () => {
  const[startTime,setstartTime] = useState(null);
  const [nowTime,setNowTime] = useState(null);
  const [resetFlag,setResetFlag] = useState(null);
  let intervalRef = useRef(null);

  function startButton() {
    setstartTime(Date.now());
    setNowTime(Date.now())
    setResetFlag(false);


    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(()=>{
      setNowTime(Date.now())
    },10);
  }
  function handleStop() {
    clearInterval(intervalRef.current);
  }
  function reset() {
    clearInterval(intervalRef.current);
    setstartTime(null)
    setNowTime(null)
    setResetFlag(true)
  }
  let secondPassed = 0;
  if(startTime !==null && nowTime !== null) {
    secondPassed = (nowTime-startTime) / 1000;
  }
  
  return (

    <div>
      <h1>Time passed: {resetFlag ? '0.000': secondPassed.toFixed(3)} </h1>    
      <button onClick={startButton}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default TimerClock
