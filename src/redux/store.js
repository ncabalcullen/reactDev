import { legacy_createStore as createStore} from "redux";

const initialState = [
    {
        id: 1, name: 'Explicar Reducer', finalizada: false
    }
]

const tareaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TAREAS] Agregar tarea':
            if (tarea === '') {
                break;
            }
            return [...state, action.payload]
        case '[TAREAS] Finalizar tarea':
            return state.map(tarea => {
                if (tarea.id === action.payload) {
                    return {
                        ...tarea,
                        finalizada: !tarea.finalizada

                    }
                } else {
                    return tarea
                }
            })
        case '[TAREAS] Eliminar tarea':
            return state.filter(tarea => tarea.id !== action.payload);
        case '[TAREAS] Eliminar tareas':
            console.log(state.map((task) => { return task }))
            return state.filter(tarea => tarea.id === '');
    }
    return state
}

export const store = createStore(tareaReducer)