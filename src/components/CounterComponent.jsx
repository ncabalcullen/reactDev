import React from 'react'
import { useCounter } from '../hooks/UseCounter'

export const CounterComponent = () => {
    const { counter, increment, decrement, reset } = useCounter(0)

    return (
        <>
            <h1>Contador</h1>
            <h4>{counter}</h4>
            <button className="btn btn-primary" onClick={() => increment(4)}>+1</button>
            <button className="btn btn-danger" onClick={() => reset()}>Reset</button>
            <button className="btn btn-primary" onClick={() => decrement(1, false)}>-1</button>
        </>

    )
}
