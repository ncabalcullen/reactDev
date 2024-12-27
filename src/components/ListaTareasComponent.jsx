export const ListaTareasComponent = () => {

    const initialState = [
        {
            id: 1, name: 'Explicar Reducer', finalizada: false
        }
    ]
    const tareaNueva = {
        id: 2, name: 'Explicar useReducer', finalizada: false
    }

    const agregarTarea = {
        type: '[TAREAS] Agregar tarea',
        payload: tareaNueva
    }


    const tareaReducer = (state, action = {}) => {
        if (action.type === '[TAREAS] Agregar tarea') {
            return [...state, action.payload]
        }
        return state
    }



    console.log(tareaReducer(initialState, agregarTarea))
    return (
        <>
            {JSON.stringify(tareaReducer(initialState, agregarTarea))}
        </>
    )
}
