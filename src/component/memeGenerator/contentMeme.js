import React, {useState} from "react";

import {faImage} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import memeData from "../../global/assets/memeData";


const imageFuturama = require('../images/futurama1.jpg')

export default function ContentMeme(){
    let randomImage = memeData;
    let firstImage = memeData.data.memes[5].url;
    const [imageUrl, setImageUrl] = useState(firstImage)

    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')

    function getRandomImage()  {
        const randomIndex = Math.floor(Math.random() * randomImage.data.memes.length)
        const randomImageUrl = memeData.data.memes[randomIndex].url;
        setImageUrl(randomImageUrl)
    };

    function handlerInputChangeTop(event){
        console.log(event)
        setTopText(event.target.value)
    }

    function handlerInputChangeBottom(event){
        setBottomText(event.target.value)
    }


    return(
        <div className="content-meme">
            <div className="content-meme-input">
                <input onChange={handlerInputChangeTop} type="text" placeholder="Top word on the image"/>
                <input onChange={handlerInputChangeBottom} type="text" placeholder="Bottom word on the image"/>
            </div>
            <button onClick={getRandomImage}> Get a new meme image <FontAwesomeIcon icon={faImage} /> </button>
            <div className="content-meme-image">
                <img src={imageUrl}/>
                <h1 className="content-meme-top-text">{topText}</h1>
                <h1 className="content-meme-bottom-text">{bottomText}</h1>
            </div>

        </div>
    )
}