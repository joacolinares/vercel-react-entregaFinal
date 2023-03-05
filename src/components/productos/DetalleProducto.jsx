import React, { useState } from 'react'

export const DetalleProducto = () => {

    const [contador, setcontador] = useState(0);
    const [carrito, setcarrito] = useState(0)


    function aumentar() {
        setcontador(contador + 1)
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
        <div style={{ border: "1px solid", width: "20%", position: "absolute", left: "500px", textAlign: "center" }}>
            <div>Teclado Gamer RGB</div>
            <p>Teclado gamer diseñado para videojuegos</p>
            <button onClick={restar}>-</button>  {contador}<button onClick={aumentar}>+</button>
            <br></br>
            <button>COMRARA</button>
        </div>
    </>
    )
}
