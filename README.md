
# React Tunes Player
[![npm status](https://img.shields.io/npm/v/react-tunes-player.svg)](https://www.npmjs.com/package/react-tunes-player) 
[![Build Status](https://travis-ci.org/zulucoda/react-tunes-player.svg?branch=master)](https://travis-ci.org/zulucoda/react-tunes-player) 
[![Coverage Status](https://coveralls.io/repos/github/zulucoda/react-tunes-player/badge.svg?branch=master)](https://coveralls.io/github/zulucoda/react-tunes-player?branch=master)

A simple .ogg/.mp3 player. 

[![react-tunes-player-example](react-tunes-player-example.gif)](https://react-tunes-player.mfbproject.co.za/)

## Demo
[Demo - https://react-tunes-player.mfbproject.co.za/](https://react-tunes-player.mfbproject.co.za/)

## Installation

````
npm install --save react-tunes-player
````

## Usage

## Example Repo on how to use `react-tunes-player`
[https://github.com/zulucoda/react-tunes-player-test](https://github.com/zulucoda/react-tunes-player-test)

### Import `ReactTunesPlayer` into your component

````javascript
import ReactTunesPlayer from "react-tunes-player";
````

````javascript

<ReactTunesPlayer
    tunes={[
             {
               tune: "https://react-tunes-player.mfbproject.co.za/assets/audio/the_lego_tune.ogg",
               name: "The lego tune",
               album: "https://react-tunes-player.mfbproject.co.za/assets/images/dune.jpg"
             },
             {
               tune: "https://react-tunes-player.mfbproject.co.za/assets/audio/bensound-funkysuspense.mp3",
               name: "Funky Suspense",
               album: "https://react-tunes-player.mfbproject.co.za/assets/images/funkysuspense.jpg"
             }
          ]}
/>
````

### Tune Type

| Name | Type | Description | Example |
| :----| :----| :-----------| :-----------| 
| tune  | string | This is the tune location | `tune: 'https://react-tunes-player.mfbproject.co.za/assets/audio/the_lego_tune.ogg'` |
| name  | string | This is the tune name | `name: 'The lego tune'` |
| album  | string | This is the tune album art location | `album: 'https://react-tunes-player.mfbproject.co.za/assets/images/dune.jpg'` |

Example:
```
// Tune Type
{
     tune: [URL/LOCATION_FOR_TUNE],
     name: [NAME_OF_THE_TUNE],
     album: [URL/LOCATION_FOR_ALBUM_ART]
}
```

### Available Props

| Prop | Type | Description |
| :------| :-----------| :-----------|
| tunes  | `Array<Tune>` | [Array of Tune Type](#tune-type) |

Example:
```
// tunes
[
 {
     tune: "/assets/audio/the_lego_tune.ogg",
     name: "The lego tune",
     album: "/assets/images/dune.jpg"
 }
]
```

## Music Credits
[Royalty Free Music from Bensound](http://www.bensound.com/)

[Dune: The Battle for Arrakis](https://en.wikipedia.org/wiki/Dune_II)

## License
MIT License.

Copyright (c) 2017 Muzikayise Flynn Buthelezi (zuluCoda).