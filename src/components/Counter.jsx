import React, {useState} from "react";

const Counter = function(){
    const [count, setCount] = useState(0)

    function inc(){
        setCount(count + 1)
      }
    
      function dec(){
        setCount(count - 1)
      }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )
}

export default Counter