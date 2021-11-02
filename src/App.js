import React, {useState} from "react";
import "./App.css"

function App(){
  const[counter, setCounter] = useState(0)
  return(
    <div className="App">
      <header>
        <h1>Counter App using State</h1>
      </header>
      <h2>
        Current Value of the count is {counter}
      </h2>
      <button onClick = { () => setCounter(0) }>Reset Counter</button>
      {/* limiting counter to 10 */}
      <button onClick = {() => (counter > 9 ? "" : setCounter (counter + 1)) } >Increase Counter</button>
      {/* limiting counter to zero */}
      <button onClick= {()=> (counter < 1 ? "" : setCounter (counter - 1)) }>Decrease Counter</button>
    </div>
  )
}
 export default App;