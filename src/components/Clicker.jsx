import React, {useState, useEffect} from 'react'

function Clicker() {
    const [count, setCount] = useState(0)

    const increment = () => {
      setCount(count + 1)
    }
    const decrement = () => {
      setCount(count - 1)
    }
    
    useEffect(() => {
        console.log('on/change')
        
        return () => console.log('off')
    }, [count])

    return (
      <div className="app">
        <button style={{width: '25px', height: '25px'}} onClick={increment}>+</button>
        <span style={{margin: '10px'}}>{count}</span>
        <button style={{width: '25px', height: '25px'}} onClick={decrement}>-</button>
      </div>
    )
}

export default Clicker