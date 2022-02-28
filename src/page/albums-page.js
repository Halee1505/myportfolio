import React from "react"
import Header from "../component/header"
import Title from "../component/Title"
import Album from "../component/album"
import Navbar from "../component/navbar"

function ShowAlbum() {
    return (
        <React.Fragment>
            <Header />
            <Title />
            <Navbar />
            <Album />
        </React.Fragment>
    )
}

export default ShowAlbum