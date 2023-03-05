import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget'
import { Categorias } from './categorias/DropdownMenu'

export const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to={"/"}> <a className="navbar-brand" href="#">Mercado Libre 3.0</a></Link>
                <Link to={"contacto"}> <a className="navbar-brand" href="#">Contactanos</a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Categorias />
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        <CartWidget totalProductos={0} />
                    </form>
                </div>
            </div>
        </nav>
    )
}
