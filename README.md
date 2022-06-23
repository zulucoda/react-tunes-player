
# React Tunes Player
[![npm status](https://img.shields.io/npm/v/react-tunes-player.svg)](https://www.npmjs.com/package/react-tunes-player) 
[![Build Status](https://travis-ci.org/zulucoda/react-tunes-player.svg?branch=master)](https://travis-ci.org/zulucoda/react-tunes-player) 
[![Coverage Status](https://coveralls.io/repos/github/zulucoda/react-tunes-player/badge.svg?branch=master)](https://coveralls.io/github/zulucoda/react-tunes-player?branch=master)

A simple responsive .ogg/.mp3 player.  

[![react-tunes-player-example](https://raw.githubusercontent.com/zulucoda/react-tunes-player/master/react-tunes-player-example.webm)](https://react-tunes-player.mfbproject.co.za/)

## Demo
[Demo - https://react-tunes-player.mfbproject.co.za/](https://react-tunes-player.mfbproject.co.za/)

## Installation

````
npm install --save react-tunes-player
````
or
````
yarn add react-tunes-player
````

## Usage

````javascript
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTunesPlayer from 'react-tunes-player';

const data = [
  {
    tune:
      'https://react-tunes-player.mfbproject.co.za/assets/audio/the_lego_tune.ogg',
    name: 'The lego tune',
    album: 'https://react-tunes-player.mfbproject.co.za/assets/images/dune.jpg',
  },
  {
    tune:
      'https://react-tunes-player.mfbproject.co.za/assets/audio/bensound-funkysuspense.mp3',
    name: 'Funky Suspense',
    album:
      'https://react-tunes-player.mfbproject.co.za/assets/images/funkysuspense.jpg',
  },
];

ReactDOM.render(
  <ReactTunesPlayer tunes={data} />,
  document.querySelector('.app'),
);
````

### Example folder on how to use `react-tunes-player`
[example](https://github.com/zulucoda/react-tunes-player/tree/master/example)

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
     tune: "/assets/audio/the_lego_tune.ogg",
     name: "The lego tune",
     album: "/assets/images/dune.jpg"
}
```

### Available Props

| Prop      | Type          | Description                             |
|:----------|:--------------|:----------------------------------------|
| tunes     | `Array<Tune>` | [Array of Tune Type](#tune-type)        |
| oldPlayer | `boolean`     | load old v5 player - default is `false` |
| darkMode  | `boolean`     | light or dark them - default is `true`  |

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

## Responsive Design
### 375 Mobile
 ![react-tunes-player-mobile.png](https://raw.githubusercontent.com/zulucoda/react-tunes-player/master/react-tunes-player-mobile.png)
  
### 768 Tablet
 ![react-tunes-player-tablet.png](https://raw.githubusercontent.com/zulucoda/react-tunes-player/master/react-tunes-player-tablet.png)

### 1024 Laptop
 ![react-tunes-player-laptop](https://raw.githubusercontent.com/zulucoda/react-tunes-player/master/react-tunes-player-laptop.png)

*Greater than 1024 is the same laptop*

## Available CSS Overrides
| Class                                | Description                                                                | 
|:-------------------------------------|:---------------------------------------------------------------------------|
| `.album`                             | Override Album container                                                   |
| `.album-cover`                       | Override Album Cover container                                             |
| `.album-img`                         | Override Album Image                                                       |
| `.album-header`                      | Override Album Header container                                            |
| `.album-header-font`                 | Override Album Header Font                                                 |
| `.player`                            | Override Player Container (Main Grid)                                      |
| `.player-controls`                   | Override Player Controls Container                                         |
| `.player-controls-list`              | Override Player Controls List Container                                    |
| `.player-controls-list-skip-back`    | Override Player Controls List Skip Back Button Container                   |
| `.skip-back`                         | Override Skip Back Button                                                  |
| `.player-controls-list-play-circle`  | Override Player Controls List Play Button Container                        |
| `.play-circle`                       | Override Play Button                                                       |
| `.player-controls-list-pause-circle` | Override Player Controls List Pause Button Container                       |
| `.pause-circle`                      | Override Pause Button                                                      |
| `.player-controls-list-skip-forward` | Override Player Controls List Skip Forward Button Container                |
| `.skip-forward`                      | Override Skip Forward Button                                               |
| `.seek-control`                      | Override Seek Control Container                                            |
| `.seek-control-time-progress`        | Override Seek Control Time Progress                                        |
| `.seek-control-progress`             | Override Seek Control Progress                                             |
| `.seek-control-time-total`           | Override Seek Control Time Total                                           |
| `.volume-controls`                   | Override Volume Controls Container                                         |
| `.volume-controls-list`              | Override Volume Controls List Container                                    |
| `.volume-controls-list-x`            | Override Volume Controls List X Container (Mute Button Container)          |
| `.volume-x`                          | Override Mute Button                                                       |
| `.volume-controls-list-0`            | Override Volume Controls List 0 Container (Low Volume Button Container)    |
| `.volume`                            | Override Low Volume Button                                                 |
| `.volume-controls-list-1`            | Override Volume Controls List 1 Container (Medium Volume Button Container) |
| `.volume-1`                          | Override Medium Volume Button                                              |
| `.volume-controls-list-2`            | Override Volume Controls List 2 Container (High Volume Button Container)   |
| `.volume-2`                          | Override High Volume Button Container                                      |

## Music Credits
[Royalty Free Music from Bensound](http://www.bensound.com/)

[Dune: The Battle for Arrakis](https://en.wikipedia.org/wiki/Dune_II)

## License
MIT License.

Copyright (c) 2017 Muzikayise Flynn Buthelezi (zuluCoda).