import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ReactTunesPlayerContainer } from "./components/react-tunes-player";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <ReactTunesPlayerContainer
            // tunes={[
            //   {
            //     tune: "/assets/audio/the_lego_tune.ogg",
            //     name: "The lego tune",
            //     album: "/assets/images/dune.jpg"
            //   },
            //   {
            //     tune: "/assets/audio/bensound-funkysuspense.mp3",
            //     name: "Funky Suspense",
            //     album: "/assets/images/funkysuspense.jpg"
            //   }
            // ]}
            tunes={[]}
          />
        </div>
      </div>
    );
  }
}

export default App;
