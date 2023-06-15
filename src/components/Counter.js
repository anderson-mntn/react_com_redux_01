import React, { useState } from "react";

function Counter(props){

    const [count, setCount] = useState(3)

    
    return(<div>
        <div>Counter: {count}</div>
        <button onClick={()=>{setCount((a)=> a - 1)}}>-</button>
        <button onClick={()=>{setCount((a)=> a + 1)}}>+</button>
    </div>)
}

export default Counter;