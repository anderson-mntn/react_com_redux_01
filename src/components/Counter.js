import React, { useState } from "react";
import { useSelector } from "react-redux";

function Counter(props){

    const count = useSelector((state)=>{ return state})

    return(<div>
        <div>Counter: {count} </div>
        <button onClick={()=>{}}>-</button>
        <button onClick={()=>{}}>+</button>
    </div>)
}

export default Counter;