import React from 'react'
import { CalculoComponent } from "./components/CalculoComponent";
import { CallbackComponent } from "./components/CallbackComponent";
import { CounterComponent } from "./components/CounterComponent";
import { FetchComponent } from "./components/FetchComponent";
import { FormsAppComponent } from "./components/FormsAppComponent";
import { ListaTareasComponent } from './components/ListaTareasComponent';

export const HooksApp = () => {
    return (
        <>
            {/* <h1>App Forms</h1>
            <FormsAppComponent/>
            <h1>Calculo</h1>
            <CalculoComponent/>
            <h1>Counter</h1>
            <CounterComponent/>
            <h1>FetchComponent</h1>
            <FetchComponent/> 
            <h1>CallBack Component</h1>
            <CallbackComponent/>*/}
            <h1>Lista Tareas Component </h1>
            <ListaTareasComponent/>
        </>

    )
}
