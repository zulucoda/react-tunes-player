import React from 'react';
import styled from 'styled-components';
import { VolumeX, Volume, Volume1, Volume2 } from 'lucide-react';
import { func } from 'prop-types';
import device from '../../utils/devices';

const VolumeControlsContainer = styled.div`
  display: none;
  @media ${device.laptop} {
    display: inline;
  }
`;

const VolumeControlsList = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const VolumeControlItem = styled.li`
  list-style: none;
  cursor: pointer;
`;

const VolumeControls = ({
  volumeMute,
  volumeLow,
  volumeMedium,
  volumeHigh,
}) => {
  const onVolumeMuteClick = (e) => {
    e.preventDefault();
    return volumeMute();
  };

  const onVolumeLowClick = (e) => {
    e.preventDefault();
    return volumeLow();
  };

  const onVolumeMediumClick = (e) => {
    e.preventDefault();
    return volumeMedium();
  };

  const onVolumeHighClick = (e) => {
    e.preventDefault();
    return volumeHigh();
  };

  return (
    <VolumeControlsContainer className="volume-controls">
      <VolumeControlsList className="volume-controls-list">
        <VolumeControlItem
          className="volume-controls-list-x"
          onClick={onVolumeMuteClick}
        >
          <VolumeX className="volume-x" role="volume-x" />
        </VolumeControlItem>
        <VolumeControlItem
          className="volume-controls-list-0"
          onClick={onVolumeLowClick}
        >
          <Volume className="volume" role="volume" />
        </VolumeControlItem>
        <VolumeControlItem
          className="volume-controls-list-1"
          onClick={onVolumeMediumClick}
        >
          <Volume1 className="volume-1" role="volume-1" />
        </VolumeControlItem>
        <VolumeControlItem
          className="volume-controls-list-2"
          onClick={onVolumeHighClick}
        >
          <Volume2 className="volume-2" role="volume-2" />
        </VolumeControlItem>
      </VolumeControlsList>
    </VolumeControlsContainer>
  );
};

VolumeControls.propTypes = {
  volumeMute: func.isRequired,
  volumeLow: func.isRequired,
  volumeMedium: func.isRequired,
  volumeHigh: func.isRequired,
};

export default VolumeControls;
