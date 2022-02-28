import React from "react"
import { Carousel } from "react-bootstrap"
import "../css/header.css"
import "../css/responsive.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <div className="top">
                <img className="logo" src="https://res.cloudinary.com/vitamim/image/upload/v1642098900/source/logo_w8srkq.png"/>
                <a href="/" style={{textDecoration:"none"}}><p className="portfolio">PORTFOLIO</p></a>
            </div>
        </div >
    )
}
export default Header;