import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {
    const [show, setShow] = useState(true)
    return (
        <div>
            <h1>RealExampple useRef</h1>
            <hr></hr>

            {show && <MultipleCustomHooks></MultipleCustomHooks>}

            <button
                className='btn btn-primary mt-5'
                onClick={() => {
                    setShow(!show)
                }}
            >
                Show/Hide
            </button>
        </div>
    )
}
