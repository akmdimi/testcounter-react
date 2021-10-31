import React, {useState} from "react";
import "./App"

function App(){
  const[counter, setCounter] = useState(0)
  return(
    <div>
      <header>
        <h1>Counter App using State</h1>
      </header>
      <h2>
        Current Value of the count is {counter}
      </h2>
      <button>Reset Counter</button>
      <button onClick = {() => setCounter(counter+1)} >Increase Counter</button>
      <button>Decrease Counter</button>

    </div>
  )
}
 export default App;