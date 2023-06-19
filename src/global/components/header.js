import React from "react";
import image from "../images/imageok.png"

export default function Header() {
    return (
            <nav className="nav" >
                <div className="nav-left">
                    <img className="nav-logo" src={image}/>
                    <h3>React Facts</h3>
                </div>
                <h4>React Course - Project 1</h4>
            </nav>
    )
}