import React from "react";
import {faAirbnb} from "@fortawesome/free-brands-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// UNA DELLE COSE CHE SI FANNO SPESSO è DI ANDARE A DESTRUTTURARRE IMMEDIATAMENTE PROPS, COSì POSSO CAPIRE
// CHE TIPO DI PROPRIETA' HO
export default function ProductCard({image, name, number, email}) {
    return (
        <div className="product-card">
            <img className="product-card-image" src={image}/>
            <h1>{name}</h1>
            <div className="product-card-container">
            <div className="product-card-info">
                <FontAwesomeIcon icon={faPhone} />
                <h3>{number}</h3>
            </div>
            <div className="product-card-info">
                <FontAwesomeIcon icon={faEnvelope} />
                <h3>{email}</h3>
            </div>
            </div>


        </div>
    )
}