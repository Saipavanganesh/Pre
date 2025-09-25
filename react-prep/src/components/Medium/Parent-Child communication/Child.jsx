import React from 'react'

const Child = ({ incrementCount, count }) => {
    const handleClick = () => {
        incrementCount(1);
    }
    return (
        <div>
            <div className='medium-count'>{count}</div>
            <button className='child-button' onClick={handleClick}>Increment</button>
        </div>
    )
}

export default Child