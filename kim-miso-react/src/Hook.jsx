// import  { useState } from "react";

// function ExampleComponent() {
//   const [count, setCount] = useState(0); // Initial state is 0

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// export default ExampleComponent

import {userState} from "react";
function MisoComponent() {
    const [count, setCount] = userState(0); 

    return (
        <div>
            <p>count: {count}</p>
            <button onClick= {() => setCount(count + 1)}>Gain</button>
        </div>
    );
}

export default MisoComponent;
