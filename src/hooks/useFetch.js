import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    })

    const isMounted = useRef(true) // se declara 'true' cuando se monta el componente

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {
        setState({
            data: null,
            loading: true,
            error: null,
        })

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                // si el componente esta montado hace la peticion del setState
                if (isMounted.current) {
                    // setTimeout(() => { // este set timeout se coloco para activar el error de desmontado
                    setState({
                        loading: false,
                        error: null,
                        data,
                    })
                    // }, 4000)
                }
            })
    }, [url])
    return state
}
