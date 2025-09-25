import React, { useState } from 'react'

const ToggleVisibility = () => {
    const [visible, setVisible] = useState(true);
    const handleToggle = () => {
        setVisible(!visible);
    }
  return (
    <div>
        <button onClick={handleToggle}>{visible ? "Hide" : "Show"} Text</button>
        {visible && <p>This is a toggleable text!</p>}
    </div>
    
  )
}

export default ToggleVisibility