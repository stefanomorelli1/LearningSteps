import React from "react";
import {faAirbnb} from "@fortawesome/free-brands-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// UNA DELLE COSE CHE SI FANNO SPESSO è DI ANDARE A DESTRUTTURARRE IMMEDIATAMENTE PROPS, COSì POSSO CAPIRE
// CHE TIPO DI PROPRIETA' HO

const image = require('../images/imageok.png')
export default function ProductCard(props) {
    let style;
    console.log(props)
    if(props.rank == "CEO"){
        style = {
            backgroundColor: "cadetblue"
        }

    }else if(props.rank== "CFO"){
        style = {
            backgroundColor: "yellow",
            color: "black"
        }
    }else if(props.rank == "CTO"){
        style = {
            backgroundColor: "blue",
            color: "white"
        }
    }else{
        style = {
            backgroundColor: "gray"
        }
    }


    return (
        <div className="product-card">
            <div style={style} className="product-card-badge">{props.rank}</div>
            <img className="product-card-image" src={props.image}/>
            <h1>{props.name}</h1>
            <div className="product-card-container">
            <div className="product-card-info">
                <FontAwesomeIcon icon={faPhone} />
                <h3>{props.number}</h3>
            </div>
            <div className="product-card-info">
                <FontAwesomeIcon icon={faEnvelope} />
                <h3>{props.email}</h3>
            </div>
            </div>


        </div>
    )
}