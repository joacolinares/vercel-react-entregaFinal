import { useState } from "react"


export const ItemCount = ({ valInicial, cantidad, onAdd }) => {

  const [contador, setContador] = useState(valInicial)


  const sumar = () => (contador < cantidad) && setContador(contador + 1)
  const restar = () => (contador > valInicial) && setContador(contador - 1)
  const agregarCarrito = () => {
    onAdd(contador)
    alert("Agregaste: " + contador + " productos al carrito")
  }

  return (
    <>
      <button className="btn btn-light" onClick={() => restar()}>-</button>
      {contador}
      <button className="btn btn-dark" onClick={() => sumar()}>+</button>
      <button className="btn btn-dark" onClick={() => agregarCarrito()}>Agregar al carrito</button>
    </>
  )
}