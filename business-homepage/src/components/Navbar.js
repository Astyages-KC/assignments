import React from "react"

function Navbar() {
    return (
    <div>
    <nav className="navbar">
        <p className="mainTitle">Kevin's Real Estate</p>
        <ul className="mainMenu">
        <li>Home</li>
        <li>About</li>
        {/* <li><link to="./components/AboutPage">React</link></li> */}
        <li>For Sale</li>
        <li>For Rent</li>
        <li>Loan Information</li>
        </ul>
    </nav>
    </div>)
}
export default Navbar