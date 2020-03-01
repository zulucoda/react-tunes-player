/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/08/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React from 'react';
import styled from 'styled-components';

const Loading = styled.div`
  visibility: visible;
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: show;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 40px;
  -webkit-perspective: 900;
  perspective: 900;
  -webkit-perspective-origin: 80% 100%;
  perspective-origin: 80% 100%;

  :before {
    content: '';
    display: block;
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(233, 55, 51, 0.4);
  }

  :not(:required):after {
    content: '';
    display: block;
    font-size: 10px;
    width: 1em;
    height: 1em;
    margin-top: 2em;
    -webkit-animation: spinner 1500ms infinite linear;
    -moz-animation: spinner 1500ms infinite linear;
    -ms-animation: spinner 1500ms infinite linear;
    -o-animation: spinner 1500ms infinite linear;
    animation: spinner 1500ms infinite linear;
    border-radius: 0.5em;
    -webkit-box-shadow: rgba(233, 55, 51, 0.9) 1.5em 0 0 0,
      rgba(233, 55, 51, 0.9) 1.1em 1.1em 0 0, rgba(233, 55, 51, 0.9) 0 1.5em 0 0,
      rgba(233, 55, 51, 0.9) -1.1em 1.1em 0 0, rgba(0, 22, 78, 0.5) -1.5em 0 0 0,
      rgba(0, 22, 78, 0.5) -1.1em -1.1em 0 0,
      rgba(233, 55, 51, 0.9) 0 -1.5em 0 0,
      rgba(233, 55, 51, 0.9) 1.1em -1.1em 0 0;
    box-shadow: rgba(233, 55, 51, 0.9) 1.5em 0 0 0,
      rgba(233, 55, 51, 0.9) 1.1em 1.1em 0 0, rgba(233, 55, 51, 0.9) 0 1.5em 0 0,
      rgba(233, 55, 51, 0.9) -1.1em 1.1em 0 0,
      rgba(233, 55, 51, 0.9) -1.5em 0 0 0,
      rgba(233, 55, 51, 0.9) -1.1em -1.1em 0 0,
      rgba(233, 55, 51, 0.9) 0 -1.5em 0 0,
      rgba(233, 55, 51, 0.9) 1.1em -1.1em 0 0;
  }

  @-webkit-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-moz-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-o-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Spinner = ({ showSpinner }) => (showSpinner ? <Loading /> : null);

export default Spinner;
