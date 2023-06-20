import React from "react";

import {faImage} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ContentMeme(){
    return(
        <div className="content-meme">
            <div className="content-meme-input">
                <input type="text" placeholder="Top word on the image"/>
                <input type="text" placeholder="Bottom word on the image"/>
            </div>
            <button> Get a new meme image <FontAwesomeIcon icon={faImage} /> </button>


        </div>
    )
}