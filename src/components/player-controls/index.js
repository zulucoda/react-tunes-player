import React from 'react';
import styled from 'styled-components';
import device from '../../utils/devices';
import { SkipBack, PlayCircle, PauseCircle, SkipForward } from 'lucide-react';
import { func } from 'prop-types';

const PlayerControlsList = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
  }
`;

const PlayerControlItem = styled.li`
  list-style: none;
  cursor: pointer;
`;

const PlayerControls = ({ play, pause, skipBack, skipForward }) => {
  const onSkipBackClick = (e) => {
    e.preventDefault();
    return skipBack();
  };

  const onPlayClick = (e) => {
    e.preventDefault();
    return play();
  };

  const onPauseClick = (e) => {
    e.preventDefault();
    return pause();
  };

  const onSkipForwardClick = (e) => {
    e.preventDefault();
    return skipForward();
  };

  return (
    <div className="player-controls">
      <PlayerControlsList className="player-controls-list">
        <PlayerControlItem
          className="player-controls-list-skip-back"
          onClick={onSkipBackClick}
        >
          <SkipBack className="skip-back" role="skip-back" />
        </PlayerControlItem>
        <PlayerControlItem
          className="player-controls-list-play-circle"
          onClick={onPlayClick}
        >
          <PlayCircle className="play-circle" role="play-circle" />
        </PlayerControlItem>
        <PlayerControlItem
          className="player-controls-list-pause-circle"
          onClick={onPauseClick}
        >
          <PauseCircle className="pause-circle" role="pause-circle" />
        </PlayerControlItem>
        <PlayerControlItem
          className="player-controls-list-skip-forward"
          onClick={onSkipForwardClick}
        >
          <SkipForward className="skip-forward" role="skip-forward" />
        </PlayerControlItem>
      </PlayerControlsList>
    </div>
  );
};

PlayerControls.propTypes = {
  skipBack: func.isRequired,
  play: func.isRequired,
  pause: func.isRequired,
  skipForward: func.isRequired,
};

export default PlayerControls;
