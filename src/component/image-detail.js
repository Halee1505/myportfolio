import React from "react"
import axios from "axios"
import { useState } from "react"
import { Carousel } from "react-bootstrap"
import "../css/collection.css"
import "../css/header.css"
import { useLocation } from "react-router-dom"
import Popup from 'reactjs-popup'
import 'bootstrap/dist/css/bootstrap.min.css'

function ImageDetail({ close, path,index }) {
    const [Img, setImg] = useState(path.indexOf(index))
    return (
        <div className="image-overlay" >
                <a class="carousel-control-prev" role="button" tabindex="0" onClick={()=>{setImg(Img==0?0:Img-1)}}><span aria-hidden="true" class="carousel-control-prev-icon"></span><span class="visually-hidden">Previous</span></a>
            <div className="image-border">
                <img src={path[Img]} />
            </div>
                <a class="carousel-control-next" role="button" tabindex="0"  onClick={()=>{setImg(Img==(path.length-1)?(path.length-1):Img+1)}}><span aria-hidden="true" class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span></a>
            <div className="exit" onClick={close}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg></div>
        </div>
    )
}
export default ImageDetail