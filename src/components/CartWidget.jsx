import React, { useState } from 'react'

export const CartWidget = ({ totalProductos }) => {

    const [menu, setmenu] = useState(false)

    function abrirCerrar() {

    }

    return (<>
        <button onClick={abrirCerrar}>Carrito {totalProductos}</button>
        <div></div>
    </>
    )
}
