import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

const userPhoto = require("../component/images/photo-1633332755192-727a05c4013d.jpeg");
export default function Info(){
    return(
        <div className="card-info">
            <img src={userPhoto}/>
            <h1>Mario Rossi</h1>
            <h2>Frontend Developer</h2>
            <h3>stefanomorelli</h3>
            <div className="card-button">
                <button className="card-button-email"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> E-Mail</button>
                <button className="card-button-linkedIn"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> LinkedIn</button>
            </div>
        </div>
    )
}