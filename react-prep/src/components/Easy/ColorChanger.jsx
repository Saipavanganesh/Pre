import React, { useState } from 'react'

const ColorChanger = () => {
    const [color, setColor] = useState(null)
    const handleChange = (c) => {
        setColor(c)
    }
  return (
    <div>
        <div className='colorchange-div' style={{backgroundColor:color}}></div>
        <div className='colorchange-buttons'>
            <button style={{backgroundColor:"red"}} onClick={() => handleChange("red")}>Red</button>
            <button style={{backgroundColor:"green"}} onClick={() => handleChange("green")}>Green</button>
            <button style={{backgroundColor:"blue"}} onClick={() => handleChange("blue")}>Blue</button>
        </div>
    </div>
  )
}

export default ColorChanger