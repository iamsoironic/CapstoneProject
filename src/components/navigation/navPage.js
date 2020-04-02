import React from 'react'
import { NavLink } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones, faAddressBook} from "@fortawesome/free-solid-svg-icons";

library.add(faHeadphones, faAddressBook);

export default function navPage() {
    return (
        <div className="nav-page-container">
            <div className="left-navpage">
                <div className="nav-link-wrapper-navpage">
                    <NavLink exact to="/home" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                </div>
                <div className="nav-link-wrapper-navpage">
                    <NavLink to="/about" activeClassName="nav-link-active">
                        About
                    </NavLink>
                </div>
                <div className="nav-link-wrapper-navpage">
                    <NavLink to="/production" activeClassName="nav-link-active">
                        Production
                    </NavLink>
                </div>
                <div className="nav-link-wrapper-navpage">
                    <NavLink to="/photography" activeClassName="nav-link-active">
                        Photography
                    </NavLink>
                </div>
                <div className="nav-link-wrapper-navpage">
                    <NavLink to="/djing" activeClassName="nav-link-active">
                        Djing
                    </NavLink>
                </div>
                <div className="right-navbar-navpage">
                    <NavLink to="/contact" activeClassName="nav-link-active">
                        <FontAwesomeIcon icon="address-book"/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
