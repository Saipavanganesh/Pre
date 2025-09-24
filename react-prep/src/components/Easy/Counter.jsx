import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [displayMessage, setDisplayMessage] = useState("")

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1)
    }
    const handleReset = () => {
        setCount(0)
    }
    useEffect(() => {
        count % 2 === 0 ? setDisplayMessage("Count is even") : setDisplayMessage("Count is Odd")
    }, [count])
    return (
        <div>
            <div>{displayMessage}</div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Counter