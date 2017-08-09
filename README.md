# React Tunes Player
-----------

A simple .ogg/.mp3 player. This component uses Redux to store it's state. 
The benefit of using Redux is the ability of dispatching action to control the player functions.

#### Example
- `pauseCurrentTune()` - This action creator will dispatched an action to pause current tune being played.
- `playCurrentTune()` - This action creator will dispatched an action to play current tune being played.
- `setNextTune()` - This action creator will dispatched an action to go to the next tune in the tunes list.
- `setPreviousTune()` - This action creator will dispatched an action to go to the previous tune in the tunes list.

## Dependency
- Redux

## Installation

````
npm install --save react-tunes-player
````

## Usage

## React

### Import `ReactTunesPlayerContainer` into your view

````javascript
import { ReactTunesPlayerContainer } from "react-tunes-player";
````

### Add `ReactTunesPlayerContainer` to your view.

````javascript

<ReactTunesPlayerContainer
    tunes={[
      {
        tune: "/assets/audio/the_lego_tune.ogg",
        name: "The lego tune",
        album: "/assets/images/dune.jpg"
      },
      {
        tune: "/assets/audio/bensound-funkysuspense.mp3",
        name: "Funky Suspense",
        album: "/assets/images/funkysuspense.jpg"
      }
    ]}
/>
````

### `ReactTunesPlayerContainer` takes in tunes prop, tunes must set with the following info:
```
//Tune object
{
 tune: [URL/LOCATION_FOR_TUNE],
 name: [NAME_OF_THE_TUNE],
 album: [URL/LOCATION_FOR_ALBUM_ART]
}

//example
{
 tune: "/assets/audio/the_lego_tune.ogg",
 name: "The lego tune",
 album: "/assets/images/dune.jpg"
}
```

## Redux
### Import `reactTunesPlayerReducer` into your reducers files
```javascript
import { reactTunesPlayerReducer } from "react-tunes-player";
```
### Add to `combineReducers`
```javascript
export default combineReducers({
  reactTunesPlayerReducer
});
```

## Inspirations
- [HTML5 Audio Player with Responsive Playlist by Mark Hillard](https://codepen.io/markhillard/pen/Hjcwu)
- [A simple React wrapper on the HTML5 audio tag](https://github.com/justinmc/react-audio-player)

## Development
NOTE: This repo was created using `create-react-app` and it was ejected to create this npm package.

Thanks to Pavel Lokhmakov - [Have a look at his blog post on how to create npm package using `create-react-app`](https://medium.com/@lokhmakov/best-way-to-create-npm-packages-with-create-react-app-b24dd449c354)

[Best way to create npm packages with create-react-app](https://medium.com/@lokhmakov/best-way-to-create-npm-packages-with-create-react-app-b24dd449c354)

## License
MIT License.

Copyright (c) 2017 Muzikayise Flynn Buthelezi (zuluCoda).