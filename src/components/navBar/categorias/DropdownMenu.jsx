import React from 'react'
import { Link } from 'react-router-dom'

export const Categorias = () => {
    return (
        <>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to={"/category/1"}>Silla Gamer</Link></li>
                        <li><Link className="dropdown-item" to={"/category/2"}>Monitor</Link></li>
                        <li><Link className="dropdown-item" to={"/category/3"}>Teclado</Link></li>
                        <li><Link className="dropdown-item" to={"/category/4"}>Mouse</Link></li>
                    </ul>
                </li>

            </ul>
        </>
    )
}
