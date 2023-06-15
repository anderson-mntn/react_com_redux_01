import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter(props){

    const count = useSelector((state)=>{ return state.counter})
    const dispatch = useDispatch()

    return(<div className="counter">
        <div>Counter: {count} </div>
        <button onClick={()=>{ dispatch({type: 'DECREMENT'}) }}>-</button>
        <button onClick={()=>{ dispatch({type: 'INCREMENT'}) }}>+</button>
    </div>)
}

export default Counter;