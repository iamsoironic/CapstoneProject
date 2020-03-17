import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones} from "@fortawesome/free-solid-svg-icons";


library.add(faHeadphones);


export default function navbar() {
    return (
        <div class="navbar-wrapper">
            <div class="navbar">
                <a href="#" class="toggle" id="navHamburger">
                    <FontAwesomeIcon icon="headphones"/>
                </a>
                <a href="#" class="brand">So Ironic</a>
            <div class="left">
                <a href="#" class="link">Home</a>
                <a href="#" class="link">About</a>
                <a href="#" class="link">Production</a>
                <a href="#" class="link">Photography</a>
                <a href="#" class="link">Djing</a>
            </div>
            </div>
        </div>
    )
}
