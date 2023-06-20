import React from "react";


const logoMeme = require('../images/TrollFace.png')
export default function HeaderMeme(){
    return(
        <div className="header-meme">
            <div className="header-meme-title">
                <img src={logoMeme} />
                <h1>Meme Generator</h1>
            </div>
            <h4>React Course - Project 3</h4>
        </div>

    )
}