import React from 'react'
import { NavLink } from "react-router-dom";
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
                <a href="/" class="brand">So Ironic</a>
            <div class="left">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/home" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/about" activeClassName="nav-link-active">
                        About
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/production" activeClassName="nav-link-active">
                        Production
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/photography" activeClassName="nav-link-active">
                        Photography
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/djing" activeClassName="nav-link-active">
                        Djing
                    </NavLink>
                </div>
            </div>
            </div>
        </div>
    )
}
