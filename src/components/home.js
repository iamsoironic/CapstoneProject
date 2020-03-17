import React from 'react'
import Image2 from "../assets/images/So-Ironic-Wall-Tag.jpg";
import NavBar from "./navigation/navbar"

export default function home() {
    return (
        <div className="home-wrapper">
            <NavBar />
            <div className="wall-image">
                <img src={Image2}></img>
            </div>
        </div>
    )
}



