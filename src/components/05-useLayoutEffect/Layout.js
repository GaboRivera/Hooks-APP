import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'
export const Layout = () => {
    const { counter, increment } = useCounter(1)
    const state = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${counter}`
    )

    const pTag = useRef()
    const [sizeBoxing, setSizeBoxing] = useState({})

    const { data } = state
    const { quote } = !!data && data[0] //--> convierto el posible null de data en False con la doble negación

    useLayoutEffect(() => {
        setSizeBoxing(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <div>
            <h1>Breaking Bad</h1>
            <hr></hr>

            <blockquote className='blockquote text-end'>
                <p className='mb-2' ref={pTag}>
                    {quote}
                </p>
            </blockquote>

            <pre>{JSON.stringify(sizeBoxing, null, 3)}</pre>

            <button className='btn btn-primary' onClick={increment}>
                Siguiente frase
            </button>
        </div>
    )
}
