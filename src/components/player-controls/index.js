import React from 'react';
import styled from 'styled-components';
import device from '../../utils/devices';
import { SkipBack, PlayCircle, PauseCircle, SkipForward } from 'lucide-react';

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
`;

const PlayerControls = () => {
  return (
    <div className="player-controls">
      <PlayerControlsList className="player-controls-list">
        <PlayerControlItem className="player-controls-list-skip-back">
          <SkipBack className="skip-back" role="skip-back" />
        </PlayerControlItem>
        <PlayerControlItem className="player-controls-list-play-circle">
          <PlayCircle className="play-circle" role="play-circle" />
        </PlayerControlItem>
        <PlayerControlItem className="player-controls-list-pause-circle">
          <PauseCircle className="pause-circle" role="Pause-circle" />
        </PlayerControlItem>
        <PlayerControlItem className="player-controls-list-skip-forward">
          <SkipForward className="skip-forward" role="skip-forward" />
        </PlayerControlItem>
      </PlayerControlsList>
    </div>
  );
};

export default PlayerControls;
