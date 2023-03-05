import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export const ItemCount = ({ titulo, cantidad, categoria }) => {
    const [contador, setcontador] = useState(0);
    const [carrito, setcarrito] = useState(0)


    function aumentar() {
        if (contador < cantidad) {
            setcontador(contador + 1)
        } else { alert("NO SE PUEDE SUPERAR EL cantidad") }
    }

    function restar() {
        if (contador === 0) {
            alert("NO SE PUEDE RESTAR A 0")
        } else {
            setcontador(contador - 1)
        }

    }

    function aumentarCarrito() {
        setcarrito(carrito + 1)
        console.log(carrito)
    }


    return (<>

        <h3>{titulo}</h3>
        <h5>{categoria}</h5>
        <br></br>
        <Link to="/detalleProducto">
            <button>VER PRODUCTO</button>
        </Link>
    </>
    )
}
