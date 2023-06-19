import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram, faGithub} from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return(
        <div className="card-footer">
            <button> <FontAwesomeIcon icon={faTwitter} /></button>
            <button> <FontAwesomeIcon icon={faFacebook} /></button>
            <button> <FontAwesomeIcon icon={faInstagram} /></button>
            <button> <FontAwesomeIcon icon={faGithub} /></button>
        </div>
    )
}