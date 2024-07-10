import { useState } from "react";
import "./Counter.css"

const showAnswer = () => {


  const [click, setClick] = useState<boolean>(false);
  console.log(click);
    return ( 

      <div>
        <p>Why is React great?</p>
        <button onClick={() => setClick((click) => !click)} >-</button>
        
        <p className={`${click ? "answer": "answerHide"}`}>Fast Learning Curve</p>
      </div>
     );
}
 
export default showAnswer;