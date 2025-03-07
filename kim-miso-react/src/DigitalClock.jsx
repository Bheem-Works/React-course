import React, {useState,useEffect} from 'react';

function DigitalClock() {
    const [time,setTime] = useState(new Date());
    useEffect (() => {
        const IntervalId = setInterval(() => {
        setTime(new Date())        
        }, 1000);
        return () => {
            clearInterval(IntervalId);
        }
    },[])

        function RealTime() {
            let hours = time.getHours();
            const minutes = time.getMinutes();
            const seconds = time.getSeconds();
            const midimate = hours >= 12 ? "Am" : "Pm";

            hours = hours % 12 || 12;

            return `${zeroPadding(hours)}: ${zeroPadding(minutes)}: ${zeroPadding(seconds)}: ${zeroPadding(midimate)}`
        }

        function zeroPadding(numbers) {
            return (numbers < 10 ? "0" : "") + numbers;
        }

    return(
    
    <div className="main Clock">
        <div className="clock">
            <span>{RealTime()}</span>
        </div>
    </div>
    );
}

export default DigitalClock;