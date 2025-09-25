    import React, { useState } from 'react'
    import Child from './Child';

    const Parent = () => {
        const [count, setCount] = useState(0);

        const incrementCount = (value) => {
            setCount((prevCount) => prevCount + value);
        }
        return (
            <div>
                <Child incrementCount={incrementCount} count={count} />
            </div>
        )
    }

    export default Parent