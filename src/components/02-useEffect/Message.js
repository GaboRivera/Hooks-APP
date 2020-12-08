import React, { useEffect } from 'react'

export const Message = () => {
    useEffect(() => {
        console.log('montado')
        return () => {
            console.log('desmontado')
        }
    }, [])

    return (
        <div>
            <h3>Gabo</h3>
        </div>
    )
}
