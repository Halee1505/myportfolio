import React from "react"
import Header from "../component/header"
import Title from "../component/Title"
import Infor from "../component/Infor"
import Navbar from "../component/navbar"

function UserInfo() {
    return (
        <React.Fragment>
            <Header />
            <Title />
            <Navbar />
            <Infor />
        </React.Fragment>
    )
}

export default UserInfo