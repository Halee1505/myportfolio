import React from "react"
import Header from "../component/header"
import Title from "../component/Title"
import Love from "../component/love"
import Navbar from "../component/navbar"

function ShowLove() {
    return (
        <React.Fragment>
            <Header />
            <Title />
            <Navbar />
            <Love />
        </React.Fragment>
    )
}

export default ShowLove