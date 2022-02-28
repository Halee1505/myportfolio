import React from "react"
import axios from "axios"
import { useState } from "react"
import { Link } from 'react-router-dom'

const GetImgs = new Promise((resolve, reject) => {
    axios.get('https://halee-portfolio.herokuapp.com/loadImg')
        .then((res) => resolve(res.data))
}
)

function ShowAlbum() {
    const [albums, setAlbums] = useState(null)
    GetImgs.then(
        (res) => setAlbums(res)
    )
    console.log(albums)
    if (albums) {
        return (
            <div className="main">
                <div className="intro">
                    <div className="albums-description">
                        {albums.map((album, index) =>
                            <Link key={index} className="album" to={`/album/${album.gallery}`}>
                                {/* href */}
                                <div className="album-thumbnail" style={{ backgroundImage: "url(" + album.path[0] + ")" }}>
                                    <div className="album-overlay">
                                        <h3 className="album-name">{album.gallery}</h3>
                                    </div>
                                </div>
                            </Link>
                        )}
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
export default ShowAlbum
