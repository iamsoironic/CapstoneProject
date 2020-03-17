import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones} from "@fortawesome/free-solid-svg-icons";

import HomeBody from "./homeBody";
import Home from "./home"



library.add(faHeadphones);

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
      </Switch>
    </div>
  </Router>
  </div>
</div>
    );
  }
}
