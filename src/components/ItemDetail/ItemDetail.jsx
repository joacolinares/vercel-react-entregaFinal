import { ItemCount } from '../ItemCount/ItemCount'
export const ItemDetail = ({ item }) => {

  const onAdd = (cantidad) => {
    console.log(cantidad)
    console.log(item)
  }

  return (
    <div className='row g-0'>
      <div className="col-md-4">
        <img src={item.img} className="img-fluid rounded-start" alt={`Imagen de ${item.nombre}`} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className='card-title'>{item.nombre} {item.modelo}</h5>
          <p className='card-text'>Marca: {item.marca}</p>
          <p className='card-text'>Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
          <p className='card-text'>cantidad: {item.cantidad}</p>
          <ItemCount valInicial={1} cantidad={item.cantidad} onAdd={onAdd} />
          <button className='btn btn-secondary'>Finalizar Compra</button>
        </div>
      </div>

    </div>
  )
}