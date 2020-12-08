import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './effects.css'
export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1)

    const state = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${counter}`
    )

    const { loading, data } = state
    const { author, quote } = !!data && data[0] //--> convierto el posible null de data en False con la doble negación

    return (
        <div>
            <h1>Breaking Bad</h1>
            <hr></hr>

            {loading ? (
                <div className='alert alert-info text-center'>Loading...</div>
            ) : (
                <blockquote className='blockquote text-end'>
                    <p className='mb-2'>{quote}</p>
                    <footer className='blockquote-footer'>{author}</footer>
                </blockquote>
            )}

            <button className='btn btn-primary' onClick={increment}>
                Siguiente frase
            </button>
        </div>
    )
}
