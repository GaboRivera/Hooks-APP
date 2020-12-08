import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset } = useCounter(50)

    return (
        <>
            <hr></hr>
            <h1>Counter with HOOK: {state}</h1>
            <button className='btn btn-primary' onClick={() => increment(2)}>
                +1
            </button>
            <button className='btn btn-primary' onClick={reset}>
                reset
            </button>
            <button className='btn btn-primary' onClick={() => decrement(1)}>
                -1
            </button>
            <hr></hr>
        </>
    )
}
