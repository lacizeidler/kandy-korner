
import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import candy from "../../img/candy.png"

export const NavBar = () => {
    return (
        <>
        <div className="nav--header">
        <h1>Kandy Korner</h1>
        <img src={candy}/>
        </div>
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/products">Products</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/purchases">My Orders</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="#" onClick = {
                    ()=> {
                        localStorage.removeItem("kandy_customer")
                    }
                }>Logout</Link>
            </li>
        </ul>
        </>
    )
}