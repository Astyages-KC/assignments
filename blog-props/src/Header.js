import React from "react"
import Navbar from "./Navbar"

const Header = () => {
    return (
        <div className="headerContainer">
                <div className="overLay">
            <Navbar />
            <p className="blogHeader1"> Clean Blog </p>
            <p className="blogHeader2"> A Blog Theme by Start Bootstrap </p>
            </div>
        </div>
    )
}

export default Header