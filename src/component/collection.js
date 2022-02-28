import React from "react"
import axios from "axios"
import { useState } from "react"
import "../css/collection.css"
import "../css/header.css"
import { useLocation } from "react-router-dom"
import Popup from 'reactjs-popup';
import ImageDetail from './image-detail'

const GetImgs = new Promise((resolve, reject) => {
    axios.get('https://halee-portfolio.herokuapp.com/loadImg')
        .then((res) => resolve(res.data))
})

function ShowCollection({ gallery }) {
    const [albums, setAlbums] = useState(null)
    GetImgs.then(
        (res) => setAlbums(res)
    )
    if (albums) {
        let MyAlbum = albums.filter((album) => album.gallery == gallery)
        return (
            <div className="main">
                <div className="intro">
                    <div className="collection-description collection-thumbnail-blur" style={{ backgroundImage: "url(" + MyAlbum[0].path[Math.floor(Math.random() * MyAlbum[0].path.length)] + ")" }}>
                        <div className="gallery-name"><h3 className="collection-name">{MyAlbum[0].gallery}</h3></div>
                    </div>
                    <div className="albums-description">
                        <div className="row">
                            {MyAlbum.map((album, index) =>
                                <div key={index} className="row">
                                    <div className="column">
                                        {album.path.slice(0, album.path.length / 4).map((path, index) =>
                                            <Popup trigger={<img className="image" src={path} key={index} style={{ width: "100%" }} />} position="right center">
                                                {close=><ImageDetail close={close} path={album.path} index={path}/>}
                                            </Popup>
                                        )}
                                    </div>
                                    <div className="column">
                                        {album.path.slice(album.path.length / 4, album.path.length / 2).map((path, index) =>
                                            <Popup trigger={<img className="image" src={path} key={index} style={{ width: "100%" }} />} position="right center">
                                            {close=><ImageDetail close={close} path={album.path} index={path}/>}
                                        </Popup>
                                        )}
                                    </div>
                                    <div className="column">
                                        {album.path.slice(album.path.length / 2, 3 * album.path.length / 4).map((path, index) =>
                                            <Popup trigger={<img className="image" src={path} key={index} style={{ width: "100%" }} />} position="right center">
                                            {close=><ImageDetail close={close} path={album.path} index={path}/>}
                                        </Popup>
                                        )}
                                    </div>
                                    <div className="column">
                                        {album.path.slice(3 * album.path.length / 4, album.path.length).map((path, index) =>
                                            <Popup trigger={<img className="image" src={path} key={index} style={{ width: "100%" }} />} position="right center">
                                            {close=><ImageDetail close={close} path={album.path} index={path}/>}
                                        </Popup>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}
export default ShowCollection
