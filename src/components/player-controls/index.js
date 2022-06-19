import React from 'react';
import styled from 'styled-components';
import { SkipBack, PlayCircle, PauseCircle, SkipForward } from 'lucide-react';
import { bool, func } from 'prop-types';
import { GRAY_COLOR } from '../../utils/theme';

const PlayerControlsList = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PlayerControlItem = styled.li`
  list-style: none;
  cursor: pointer;

  :hover > svg {
    fill: ${GRAY_COLOR};
  }
`;

const PlayControlItem = styled(PlayerControlItem)`
  > svg {
    fill: ${(props) => (props.isPlaying ? `${GRAY_COLOR}` : 'none')};
  }
`;

const PauseControlItem = styled(PlayerControlItem)`
  > svg {
    fill: ${(props) => (props.isPaused ? `${GRAY_COLOR}` : 'none')};
  }
`;

const PlayerControls = ({ play, pause, skipBack, skipForward, isPlaying }) => {
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
        <PlayControlItem
          className="player-controls-list-play-circle"
          onClick={onPlayClick}
          isPlaying={isPlaying}
        >
          <PlayCircle className="play-circle" role="play-circle" />
        </PlayControlItem>
        <PauseControlItem
          className="player-controls-list-pause-circle"
          onClick={onPauseClick}
          isPaused={!isPlaying}
        >
          <PauseCircle className="pause-circle" role="pause-circle" />
        </PauseControlItem>
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
  isPlaying: bool.isRequired,
};

export default PlayerControls;
