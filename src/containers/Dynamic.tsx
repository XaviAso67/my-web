import React from 'react'

type DF = React.FC<{ path?: String }>
const Dynamic: DF = () => (
  <div>
   ¡Esta es una página dinámica! No se exportará estáticamente, pero está disponible.
    en tiempo de ejecución,
  </div>
)
export default Dynamic
