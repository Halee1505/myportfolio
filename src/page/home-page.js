import React from "react"
import Header from "../component/header"
import Title from "../component/Title"
import Navbar from "../component/navbar"

function Home() {
    return (
        <React.Fragment>
            <Header />
            <Title />
            <Navbar />
        </React.Fragment>
    )
}

export default Home