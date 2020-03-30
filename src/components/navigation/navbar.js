import React from 'react'
import { NavLink } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones, faAddressBook} from "@fortawesome/free-solid-svg-icons";


library.add(faHeadphones, faAddressBook);


export default function navbar() {
    return (
        <div className="navbar-wrapper">
            <div className="navbar">
                <a href="/" className="brand">So Ironic</a>
            <div className="left">
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
                <div className="right-navbar">
                    <NavLink to="/contact" activeClassName="nav-link-active">
                        <FontAwesomeIcon icon="address-book"/>
                    </NavLink>
                </div>
            </div>
            </div>
            
        </div>
    )
}
