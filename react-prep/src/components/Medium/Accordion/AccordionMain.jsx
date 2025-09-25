import React, { useState } from 'react'
import "../medium.css"

const AccordionMain = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        }
        else {
            setActiveIndex(index);
        }
    }
    return (
        <div className='accordion-container'>
            <div>
                <div className='accordion-title' onClick={() => handleToggle(0)}>Accordion item #1</div>
                <div className={`accordion-body ${activeIndex === 0 ? 'accordion-show' : 'accordion-hide'}`}>This is first accordion's body, and it is shown by default. Click on the other accordion to expand its body</div>

                <div className='accordion-title' onClick={() => handleToggle(1)}>Accordion item #2</div>
                <div className={`accordion-body ${activeIndex === 1 ? 'accordion-show' : 'accordion-hide'}`}>This is second accordion's body, and it is hidden by default. Click on the other accordion to expand its body</div>

                <div className='accordion-title' onClick={() => handleToggle(2)}>Accordion item #3</div>
                <div className={`accordion-body ${activeIndex === 2 ? 'accordion-show' : 'accordion-hide'}`}>This is third accordion's body, and it is hidden by default. Click on the other accordion to expand its body</div>
            </div>
        </div>
    )
}

export default AccordionMain