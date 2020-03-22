import styled from 'styled-components';
import device from './devices';
import {
  HIGH_VOLUME,
  LOW_VOLUME,
  MEDIUM_VOLUME,
  MUTE_VOLUME,
} from './constants';

export const ReactTunePlayerContainer = styled.div`
  font-family: sans-serif;
  font-size: 1em;
  position: fixed;
  bottom: -5px;
  visibility: hidden;
  width: 100%;
  -webkit-perspective: 900;
  perspective: 900;
  -webkit-perspective-origin: 80% 100%;
  perspective-origin: 80% 100%;
`;
export const TunesInner = styled.div`
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.25);
  height: 75px;
  visibility: visible;
  transition: -webkit-transform 200ms ease-out;
  transition: transform 200ms ease-out;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);

  background-color: #f2f2f2;
  border-top: 1px solid #cecece;

  -webkit-transform: translateY(0);
  transform: translateY(0);
`;
export const TunesWrapper = styled.div`
  padding-bottom: 10px;
  visibility: visible;
  position: relative;
  height: 100%;
`;
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;
export const CurrentAlbumPlaying = styled.div`
  margin: 0 1em 0 0;
  img {
    display: none;

    @media ${device.mobileL} {
      display: inline;
      height: 75px;
    }
  }
`;
export const NowPlaying = styled.div`
  margin: 2em 0 0 0;
  font-size: 0.8em;
  flex-grow: 1;
  flex-basis: 9.3em;

  @media ${device.mobileL} {
    flex-grow: 1;
  }

  @media ${device.tablet} {
    font-size: 1em;
    margin: 1.7em 1em 0 0;
  }

  @media ${device.laptop} {
    font-size: 1em;
    margin: 2em 1em 0 0;
  }
`;
export const Controls = styled.div`
  margin: 1.5em 0 0 0;
  flex-grow: 1;

  @media ${device.tablet} {
    margin: 1.7em 0 0 0;
  }
`;
const Btn = styled.a`
  background-color: transparent;
  color: #231f20;
  font-size: 1em;
  padding: 1em 0.5em 0 0.5em;

  @media ${device.tablet} {
    font-size: 1em;
    padding: 0 0.7em 0 0.7em;
  }

  @media ${device.laptop} {
    font-size: 1.5em;
    padding: 0 1em 0 1em;
  }

  > svg {
    cursor: pointer;
    fill: #594c4f;
    width: 0.7em;
    height: 0.7em;

    @media ${device.tablet} {
      width: 0.8em;
      height: 0.8em;
    }

    @media ${device.laptop} {
      width: 0.8em;
      height: 0.8em;
    }

    &:hover {
      fill: #e93733;
    }
  }
`;
export const PreviousTune = styled(Btn)``;
export const NextTune = styled(Btn)``;
export const PlayTune = styled(Btn)`
  > svg {
    fill: ${props => (props.isPlaying ? '#E93733' : '#594C4F')};
  }
`;
export const PauseTune = styled(Btn)`
  > svg {
    fill: ${props => (!props.isPlaying ? '#E93733' : '#594C4F')};
  }
`;
export const SeekTune = styled.div`
  display: none;
  @media ${device.tablet} {
    display: inline;
    margin: 1.7em 0 0 0;
    flex-grow: 2;
  }

  @media ${device.laptop} {
    display: inline;
    margin: 2em 0 0 0;
    flex-grow: 2;
  }
  > progress {
    width: 100%;

    /* Turns off styling - not usually needed, but good to know. */
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;

    color: #e93733; /* IE 10 */

    /* Needs to be in here for Safari polyfill so background images work as expected. */
    background-size: auto;

    &::-moz-progress-bar {
      background-color: #e93733;
    }

    &::-webkit-progress-value {
      background-color: #e93733;
    }
  }
`;
export const SeekTime = styled.div`
  margin: 2em 1em 0 1em;
  font-size: 0.8em;
  flex-basis: 5.5em;
  text-align: center;

  @media ${device.tablet} {
    font-size: 1em;
    margin: 1.7em 1em 0 1em;
  }

  @media ${device.laptop} {
    font-size: 1em;
    margin: 2em 1em 0 1em;
  }
`;
export const Volume = styled(Controls)`
  display: none;
  @media ${device.laptop} {
    display: inline;
  }
`;
export const HighVolume = styled(Btn)`
  > svg {
    fill: ${props => (props.volume === HIGH_VOLUME ? '#E93733' : '#594C4F')};
  }
`;
export const MediumVolume = styled(Btn)`
  > svg {
    fill: ${props => (props.volume === MEDIUM_VOLUME ? '#E93733' : '#594C4F')};
  }
`;
export const LowVolume = styled(Btn)`
  > svg {
    fill: ${props => (props.volume === LOW_VOLUME ? '#E93733' : '#594C4F')};
  }
`;
export const MuteVolume = styled(Btn)`
  > svg {
    fill: ${props => (props.volume === MUTE_VOLUME ? '#E93733' : '#594C4F')};
  }
`;
export const AudioWrapper = styled.div`
  margin: 0 auto;
  display: none;
`;
export const WarningWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > svg {
    width: 3em;
    height: 3em;
    fill: #e93733;
  }
`;
export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  flex-grow: 2;
  > svg {
    fill: #e93733;
  }
`;
export const WarningText = styled.span`
  padding: 0.5em 0 0 0;
  font-size: 1em;
  vertical-align: center;
  p {
    padding: 0;
    margin: 0;
  }
`;
