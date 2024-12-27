import React, { useCallback, useState } from 'react'
import { IncrementComponent } from './IncrementComponent'

export const CallbackComponent = () => {

  const [counter, setCounter] = useState(0)

  const incrementadorPadre = useCallback(
    (val) => {
      setCounter(c => c + val)
    },
    []
  )




  return (
    <>
      <h1>Contador: {counter}</h1>
      <IncrementComponent increment={incrementadorPadre} />
    </>
  )
}
