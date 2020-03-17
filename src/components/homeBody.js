import React from 'react';
import Image from "../assets/images/logo.jpg";


export default function homeBody() {
    return (
        <div>
            <div className="body-wrapper">
                <img src={Image}></img>
            </div>
            <div className="btn-wrapper">
                <button>ENTER</button>
            </div>
        </div>
    )
}
