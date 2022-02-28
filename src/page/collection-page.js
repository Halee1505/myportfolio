import React from "react"
import Header from "../component/header"
import Navbar from "../component/navbar"
import ShowCollection from "../component/collection"

function Collection({match}){
    return(
        <React.Fragment>
            <Header />
            <div style={{height:"70px"}}></div>
            <Navbar/>
            <ShowCollection gallery={match.params.id}/>
        </React.Fragment>
    )
}

export default Collection