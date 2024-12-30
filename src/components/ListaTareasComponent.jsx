import { useForm } from "../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"

export const ListaTareasComponent = () => {

    const tareas = useSelector(state => state)
    const dispatch = useDispatch()
    const tareaAEditar = {
        id: 1, name: 'newTask', finalizada: false
    }

    const eliminarTarea = {
        type: '[TAREAS] Eliminar tarea',

    }
    const eliminarTareas = {
        type: '[TAREAS] Eliminar tareas'
    }

    const { tarea, onInputChange } = useForm({ tarea: '' })


    const addTask = (event) => {
        event.preventDefault()
        const tareaNueva = {
            id: new Date().getTime(), name: tarea, finalizada: false
        }
        const action = {
            type: '[TAREAS] Agregar tarea',
            payload: tareaNueva
        }
        dispatch(action)

    }

    const finishTask = (id) => {
        const action = {
            type: '[TAREAS] Finalizar tarea',
            payload: id
        }

        dispatch(action)
        console.log(tareas)

    }
    const deleteTask = (id) => {
        const action = {
            type: '[TAREAS] Eliminar tarea',
            payload: id
        }

        dispatch(action)
        console.log(tareas)

    }
    const clearTasks = () => {
        const action = {
            type: '[TAREAS] Eliminar tareas',
        }

        dispatch(action)
        console.log(tareas)

    }

    return (
        <>
            <form onSubmit={addTask}>
                <div className="mb-3">
                    <label htmlFor="tarea" className="form-label">Tarea</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tarea"
                        name="tarea"
                        onChange={onInputChange}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
            <hr />

            <ul className="list-group">
                {tareas.map(tarea => {

                    return (
                        <li
                            className='list-group-item d-flex justify-content-between align-items-center'
                            key={tarea.id}>
                            <span>
                                {tarea.name}
                            </span>
                            <div>
                                <input type="checkbox"
                                    value={tarea.finalizada}
                                    onChange={() => finishTask(tarea.id)}
                                />
                                <button type="button" className="btn btn-danger m-2" onClick={() => { deleteTask(tarea.id) }}>Delete</button>

                            </div>

                        </li>

                    )
                })}
            </ul>
            <button type="button" className="btn btn-danger" onClick={clearTasks}>Clear all</button>

        </>
    )
}
