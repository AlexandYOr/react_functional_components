import React, {useState} from "react"
import Clicker from "./components/Clicker"


function App() {
  const [isClicker, setClicker] = useState(false)

  return (
    <div className="app">
      <h2>React App</h2>
      <button onClick={() => setClicker(!isClicker)}>Toggle clicker</button>
      {isClicker && <Clicker/>}
    </div>
  )
}

export default App
