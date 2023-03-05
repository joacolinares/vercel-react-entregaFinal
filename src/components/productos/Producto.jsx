import React from 'react'
import { useDarkModeContext } from '../../context/DarkModeContext'
import { ItemCount } from './herramientas/ItemCount'

export const Producto = () => {

    const { darkMode } = useDarkModeContext()
    console.log(darkMode)
    return (<>
        <h1>Productos</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div style={{ border: "1px solid", width: "20%", position: "absolute", left: "150px" }}><ItemCount titulo="Teclado Gamer RGB" cantidad={5} categoria={"Electronica"} /></div>
    </>
    )
}
