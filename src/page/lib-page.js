import React from "react"
import Header from "../component/header"
import Title from "../component/Title"
import Infor from "../component/Infor"
import Navbar from "../component/navbar"
import Lib from "../component/Lib"

function Library() {
    return (
        <React.Fragment>
            <Header />
            <Title />
            <Navbar />
            <Lib />
        </React.Fragment>
    )
}

export default Library