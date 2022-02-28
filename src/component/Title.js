import React from "react"
import { Carousel } from "react-bootstrap"
import "../css/header.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

function Title() {
    return (
        <div>
            <Carousel >
                <Carousel.Item >
                    <div className="background background1" ></div>
                </Carousel.Item>

                <Carousel.Item >
                    <div className="background background2" ></div>
                </Carousel.Item >

                <Carousel.Item >
                    <div className="background background3" ></div>
                </Carousel.Item>

                <Carousel.Item >
                    <div className="background background4" ></div>
                </Carousel.Item>

                <Carousel.Item >
                    <div className="background background5" ></div>
                </Carousel.Item >

                <Carousel.Item>
                    <div className="background background6" ></div>
                </Carousel.Item >
            </Carousel >
            <div className="info">
                <img className="menu__avt" src="http://res.cloudinary.com/vitamim/image/upload/v1641982851/aootf0lsclxzlmedbvlo.jpg" alt=""/>
                    <p className="name">NGUYỄN HẢI LINH</p>
            </div>

            
        </div >
    )
}
export default Title;