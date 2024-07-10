import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

    return ( 

        <div>
            <span>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <p>{counter}</p>
                <button onClick={() =>counter > 0 && setCounter(counter - 1)}>-</button>
            </span>
            <button onClick={() => setCounter(0)}>reset</button>

      </div>
     );
}
 
export default Counter;