import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function footer() {
    return (
        <div className="footer-wrapper">
            <footer>
                <div className="footer-logo">
                </div>
                <div className="icons">
                    <a href="https://www.facebook.com/iamsoironic">
                        <FontAwesomeIcon icon={["fab","facebook-square"]} />
                    </a>
                    <a href="https://www.instagram.com/iamsoironic/">
                        <FontAwesomeIcon icon={["fab","instagram"]} />
                    </a>
                    <a href="https://soundcloud.com/iamsoironic">
                        <FontAwesomeIcon icon={["fab","soundcloud"]} />
                    </a>
                    <a href="https://twitter.com/soironicbeats">
                        <FontAwesomeIcon icon={["fab","twitter"]} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={["fab","snapchat"]} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={["fab","youtube"]} />
                    </a>
                    
                </div>
            </footer>
        </div>
    )
}
