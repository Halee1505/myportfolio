import React from "react"

import "../css/header.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import ClipboardJS from "clipboard"
function Infor() {
    new ClipboardJS('.btn');
    return (
        <div className="main">
            <div className="intro">
                <div className="intro__description">
                    <div className="des">
                        <h4>
                            This is my portfolio, wellcome to see my photos!
                        </h4>
                        <br />
                        <p>Visit my <a href="https://www.facebook.com/hailinh.nguyen.359126/">Facebook</a></p>
                        <p>Or, my <a href="https://www.instagram.com/halee_4u_/">Instagram</a></p>

                        <p>contact me via: <a href="tel:0395114189">0395114189</a></p>
                        <p>Or: <a href="mailto:danhauloc@gmail.com">danhauloc@gmail.com</a></p>
                        <p>OCB: 0004100029204003</p>
                        <p>Agribank: 3514205177423</p>

                        
                        <p>
                            Enjoy
                        </p>


                    </div>
                </div>
                <div className="intro__description">
                    <div className="display">
                        <h3>Trưng bày</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infor;