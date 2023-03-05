import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ItemList } from '../ItemList/ItemList'


import { useDarkModeContext } from '../../context/DarkModeContext'

import { getProductos } from '../../firebase/firebase'


export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria}= useParams()
    const {darkMode} = useDarkModeContext()
    console.log(darkMode)
    useEffect(() => {
        if(idCategoria) {
            getProductos()
            .then(items => {
                const products = items.filter(prod => prod.cantidad > 0).filter(prod => prod.idCategoria === parseInt(idCategoria))
                const productsList = <ItemList products={products} plantilla={'item'}/> //Array de productos en JSX
                setProductos(productsList)
            })
        } else {
            getProductos()
            .then(items => {
                const products = items.filter(prod => prod.cantidad > 0)
                const productsList = <ItemList products={products} plantilla={'item'}/> //Array de productos en JSX
                console.log(products)
                setProductos(productsList)
            })
        }
        
    }, [idCategoria])
    //[] cuando se renderiza
    //[prop] cuando se renderiza y cuando se actualiza
    console.log( getProductos())
    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    )
}