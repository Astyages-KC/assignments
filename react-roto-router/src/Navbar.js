import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navBar">
            <Link className="homeTag" to="/">Home</Link>
            <Link className="aboutTag" to="/about">About</Link>
            <Link className="servicesTag" to="/services">Services</Link>
            <Link className="contactTag" to="/contact">Contact</Link>
        </div>
    )
}

export default Navbar