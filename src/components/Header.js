import React from "react";
import { useSelector } from "react-redux";

function Header(){
  
    const count = useSelector((state)=>{ return state.counter})

    return(<div>
       <h3>Header: {count}</h3> 
    </div>)
}

export default Header;