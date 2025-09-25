import React, { useState } from 'react'

const FormInputMirror = () => {
    const [input, setInput] = useState("")
    const handleInputChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <div>
            <input type="text" placeholder='Type something...' className='forminputmirror-input' onChange={handleInputChange} value={input} />
            <p className='forminputmirror-para'>{input}</p>
        </div>
    )
}

export default FormInputMirror