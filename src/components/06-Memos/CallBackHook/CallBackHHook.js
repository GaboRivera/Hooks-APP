import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHHook = () => {
    const [counter, setCounter] = useState(10)

    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    const increment = useCallback(() => {
        setCounter((c) => c + 1) // con esto se resuelve este error=> React Hook useCallback has a missing dependency: 'counter'. Either include it or remove the dependency array. You can also do a functional update 'setCounter(c => ...)' if you only need 'counter' in the 'setCounter' call  react-hooks/exhaustive-deps
    }, [setCounter])

    return (
        <div>
            <h1>useCallBackHHook {counter}</h1>
            <hr />

            <ShowIncrement increment={increment}></ShowIncrement>
        </div>
    )
}
