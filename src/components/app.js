import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { fab, faFacebook, faInstagram, faSoundcloud, faTwitter, faSnapchat, faYoutube } from "@fortawesome/free-brands-svg-icons";




import HomeBody from "./homeBody";
import Home from "./home"
import About from "./about"
import Production from "./production"
import Photography from "./photography"
import Djing from "./djing"
import Contact from "./contact"
import NavPage from "./navigation/navPage"

library.add(fab, faHeadphones, faFacebook, faInstagram, faSoundcloud, faTwitter, faSnapchat, faYoutube );

export default class App extends Component {
  render() {
    return (
      <div className="route-wrapper">

        <div className='container'>

          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={HomeBody} />

                <Route path="#" />

        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/production" component={Production} />
        <Route path="/photography" component={Photography} />
        <Route path="/djing" component={Djing} />
        <Route path="/contact" component={Contact} />
        <Route path="/navpage" component={NavPage} />

      </Switch>
    </div>
  </Router>
  </div>
</div>
    );
  }
}
