// Ui handled by react
import PropsDemo from "./PropsDemo"

import { useState } from "react"
import "./App.css"


function App() {

  // let [count, setCount] = useState(0);

  // function increment(){
  //   if(count<20){
  //     // count++;
  //     setCount(count => count+1);
  //     setCount(count =>count+1);
  //     setCount(count =>count+1);
  //     setCount(count =>count+1);
  //     setCount(count =>count+1);
  //   }
  // }

//   function decrement(){
//     if(count>0){
//       count--;
//       setCount(count);
//     }
// }
 
  return (
    // <div>
    // <h1>Counter : {count}</h1>
    // <br></br>
    // <button onClick={increment}>+1</button>
    // <br></br>
    // <br></br>
    // <button onClick={decrement}>-1</button>
    // </div>
    <>
    <PropsDemo name="pd"></PropsDemo>
    </>
  )
}

export default App
