import React from "react"

import "../css/navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light white">
            <div className="container-fluid white">
                <div className="navbar-border">
                    <ul>
                        <Link to="/my-information" className="btn white">
                            <div className="nav-btn"></div>
                            <h4>Giới thiệu</h4>
                        </Link>

                        <Link to="/album" className="btn white">
                            <div className="nav-btn"></div>
                            <h4>Album</h4>
                        </Link>

                        <Link to="/love" className="btn white">
                            <div className="nav-btn">
                            </div><h4>Yêu thích</h4>
                        </Link>

                        <Link to="/library" className="btn white">
                            <div className="nav-btn"></div>
                            <h4>Thư viện</h4>
                        </Link>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
export default Navbar