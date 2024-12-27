import React, { useMemo, useState } from 'react'

export const CalculoComponent = () => {

    const [show, setShow] = useState(true)
    const [numList, setNumList] = useState([2, 3, 4, 5, 6, 7, 8, 9])

    const getCalculo = (numList) => useMemo(() => {
        console.log("Calculando..")
        return numList.reduce((a, b) => a * b)
    }, [numList])

    const addNumber = () => {
        setNumList([...numList, numList[numList.length - 1] + 1])
    }

    const memorizedValue = useMemo(() => { getCalculo(numList) }, [numList])

    return (
        <>
            <h2>Calculo:</h2>
            <h4>El calculo es: {memorizedValue}</h4>
            {show && <h6>Los numeros base son : {numList.map((num) => { return num + " " })}</h6>}
            <button type="button" className="btn btn-success" onClick={() => setShow(!show)}>{show ? 'Ocultar Calculo' : 'Mostrar calculo'}</button>
            <button className="btn btn-danger" onClick={() => addNumber()}>Agregar mas numeros</button>
        </>
    )
}
