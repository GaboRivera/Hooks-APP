import React, { memo } from 'react'

/** El useMemo => 'memo' para este ejemplo
 * se usa para memorizar el componente '<Small/>'
 * y no se renderiza a menos que sus
 * propiedades cambien
 *
 * Sin el memo de la linea 13 el componente se vuelve a llamar si el state del componente principal cambia
 * */

export const Small = memo(({ value }) => {
    console.log('llamo Small')
    return <small>{value}</small>
})
