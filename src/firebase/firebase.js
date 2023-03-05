import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "proyectojoaco-939ea.firebaseapp.com",
  projectId: "proyectojoaco-939ea",
  storageBucket: "proyectojoaco-939ea.appspot.com",
  messagingSenderId: "878802075246",
  appId: "1:878802075246:web:61803ba85ae0669fa7707f",
  measurementId: "G-SF0SFHWFM7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore() //Consultar la BDD
/*
    CRUD Productos

    CREATE
    READ
    UPDATE
    DELETE
*/

export const cargarBDD = async () => {
    const promise = await fetch('./json/Productos.json')
    const Productos = await promise.json()
    Productos.forEach( async (prod) => {
        await addDoc(collection(db,"Productos"), {
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            cantidad: prod.cantidad,
            precio: prod.precio,
            img: prod.img
        })
    })
}

export const getProductos = async() => {
    const Productos = await getDocs(collection(db,"Productos"))
    const items = Productos.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return items
}

export const getProducto = async(id) => {
    const producto = await getDoc(doc(db, "Productos", id))
    const item = {...producto.data(), id: producto.id}
    return item
}

export const updateProducto = async(id, info) => {
    await updateDoc(doc(db, "Productos", id), info)
}

export const deleteProducto = async(id) => {
    await deleteDoc(doc(db, "Productos", id))
}

//Create orden Compra

export const createOrdenCompra = async(cliente, Productos,precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        datosCliente: cliente,
        Productos: Productos,
        precioTotal: precioTotal, 
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async(id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    const oCompra = {...ordenCompra.data(), id: ordenCompra.id}
    return oCompra
}