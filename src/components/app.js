import React, { Component } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones} from "@fortawesome/free-solid-svg-icons";

import Home from "./home";
import Navbar from "./navigation/navbar";
import HomeBody from "./homeBody";



library.add(faHeadphones);

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Home />
        <Navbar />
        <HomeBody />
      </div>
    );
  }
}
