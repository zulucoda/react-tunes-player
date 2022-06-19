import React, { useEffect, useState } from 'react';
import { NoTunes } from '../old-v5-player/no-tunes';
import {
  HIGH_VOLUME,
  LOW_VOLUME,
  MEDIUM_VOLUME,
  MUTE_VOLUME,
  TunesPropTypes,
} from '../../utils/constants';
import { DARK_THEME_COLOR, LIGHT_COLOR } from '../../utils/theme';
import { setNextTune, setPreviousTune } from '../../utils/util';
import Album from '../album';
import PlayerControls from '../player-controls';
import SeekControl from '../seek-control';
import VolumeControls from '../volume-controls';
import { Audio } from '../old-v5-player/audio';
import { AudioWrapper } from '../../utils/styles';
import styled from 'styled-components';
import device from '../../utils/devices';

export const PlayerGrid = styled.div`
  background: ${DARK_THEME_COLOR};
  display: grid;
  color: ${LIGHT_COLOR};
  grid-template-columns: 1fr 2fr 1fr;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 90px;
  grid-gap: 0.5em;

  // tablet
  @media ${device.tablet} {
    grid-gap: 0.5em;
    grid-template-columns: 2fr 1fr 3fr;
  }

  // desktop
  @media ${device.laptop} {
    grid-gap: 2em;
    grid-template-columns: 2fr 1fr 3fr 1fr;
  }
`;

/**
 * Player v6
 * @param {Tunes} tunes
 * @returns {JSX.Element}
 * @constructor
 */
const Player = ({ tunes = [] }) => {
  const [currentTune, setCurrentTune] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(HIGH_VOLUME);
  const [seekTimeTune, setSeekTimeTune] = useState(0);
  const [tuneDuration, setTuneDuration] = useState(0);
  const [triggerCurrentTime, setTriggerCurrentTime] = useState(false);
  const [drag, setDrag] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [onError, setOnError] = useState(false);

  useEffect(() => {
    if (tunes.length > 0) {
      setCurrentTune(tunes[0]);
    }
  }, [tunes]);

  const resetTimeAndDuration = () => {
    setSeekTimeTune(0);
    setTuneDuration(0);
  };

  const onEnded = () => {
    setIsLoading(true);
    resetTimeAndDuration();
    setPreviousTune(tunes, currentTune, setCurrentTune);
  };

  const skipBackHandler = () => {
    setIsLoading(true);
    resetTimeAndDuration();
    setPreviousTune(tunes, currentTune, setCurrentTune);
  };

  const playHandler = () => {
    setIsPlaying(true);
  };

  const pauseHandler = () => {
    setIsPlaying(false);
  };

  const skipForwardHandler = () => {
    setIsLoading(true);
    resetTimeAndDuration();
    setNextTune(tunes, currentTune, setCurrentTune);
  };

  const volumeMuteHandler = () => {
    setVolume(MUTE_VOLUME);
  };

  const volumeMediumHandler = () => {
    setVolume(MEDIUM_VOLUME);
  };

  const volumeHighHandler = () => {
    setVolume(HIGH_VOLUME);
  };

  const volumeLowHandler = () => {
    setVolume(LOW_VOLUME);
  };

  if (tunes.length === 0) {
    return (
      <PlayerGrid>
        <NoTunes />
      </PlayerGrid>
    );
  }

  // display loading state
  if (!currentTune) return null;

  return (
    <PlayerGrid>
      <Album title={currentTune.name} cover={currentTune.album} />
      <PlayerControls
        pause={pauseHandler}
        play={playHandler}
        skipBack={skipBackHandler}
        skipForward={skipForwardHandler}
        isPlaying={isPlaying}
      />
      <SeekControl
        seekTimeTune={seekTimeTune}
        tuneDuration={tuneDuration}
        setSeekTimeTune={setSeekTimeTune}
        setTriggerCurrentTime={setTriggerCurrentTime}
        drag={drag}
        setDrag={setDrag}
      />
      <VolumeControls
        volumeMute={volumeMuteHandler}
        volumeMedium={volumeMediumHandler}
        volumeHigh={volumeHighHandler}
        volumeLow={volumeLowHandler}
      />
      <AudioWrapper>
        <Audio
          currentTune={currentTune}
          isPlaying={isPlaying}
          volume={volume}
          onEnded={onEnded}
          setTuneDuration={setTuneDuration}
          setSeekTimeTune={setSeekTimeTune}
          seekTimeTune={seekTimeTune}
          triggerCurrentTime={triggerCurrentTime}
          setTriggerCurrentTime={setTriggerCurrentTime}
          setIsLoading={setIsLoading}
          setOnError={setOnError}
        />
      </AudioWrapper>
    </PlayerGrid>
  );
};

Player.propTypes = TunesPropTypes;

export default Player;
