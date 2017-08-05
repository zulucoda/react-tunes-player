import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactTunesPlayerContainer from "./react-tunes-player/react-tunes-player-container";

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
            tunes={[
              {
                tune: "/assets/audio/the_lego_tune.ogg",
                name: "The lego tune",
                album: "/assets/images/dune.jpg"
              },
              {
                tune:
                  "http://test.ithastobejazz.co.za/mp3s/1.It-Has-To-Be-Jazz-Preview.mp3",
                name: "It Has To Be Jazz",
                album: "http://test.ithastobejazz.co.za/images/albums/1.jpg"
              },
              {
                tune:
                  "http://test.ithastobejazz.co.za/mp3s/2.Prelude-1-Preview-1.mp3",
                name: "Prelude",
                album: "http://test.ithastobejazz.co.za/images/albums/2.jpg"
              },
              {
                tune:
                  "http://test.ithastobejazz.co.za/mp3s/3.Mangoli-Preview.mp3",
                name: "Mangoli",
                album: "http://test.ithastobejazz.co.za/images/albums/3.jpg"
              },
              {
                tune:
                  "http://test.ithastobejazz.co.za/mp3s/5.Moods-Preview.mp3",
                name: "Moods",
                album: "http://test.ithastobejazz.co.za/images/albums/4.jpg"
              },
              {
                tune:
                  "http://test.ithastobejazz.co.za/mp3s/6.Prelude-3-Preview-.mp3",
                name: "Prelude 3",
                album: "http://test.ithastobejazz.co.za/images/albums/5.jpg"
              }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default App;
