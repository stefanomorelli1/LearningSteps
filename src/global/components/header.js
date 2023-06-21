import React from "react";
import image from "../images/imageok.png"
import {faAirbnb} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Header() {
    return (
            <nav className="nav" >
                <div className="nav-left">
                    <FontAwesomeIcon className="nav-logo" icon={faAirbnb} />
                    <h3>airbnb</h3>

                </div>
            </nav>
    )
}