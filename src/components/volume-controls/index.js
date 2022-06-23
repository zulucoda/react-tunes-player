import React from 'react';
import styled from 'styled-components';
import { VolumeX, Volume, Volume1, Volume2 } from 'lucide-react';
import { func, number } from 'prop-types';
import device from '../../utils/devices';
import { GRAY_COLOR } from '../../utils/theme';
import {
  HIGH_VOLUME,
  LOW_VOLUME,
  MEDIUM_VOLUME,
  MUTE_VOLUME,
} from '../../utils/constants';

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
  :hover > svg {
    fill: ${GRAY_COLOR};
  }
`;

const HighVolume = styled(VolumeControlItem)`
  > svg {
    fill: ${(props) =>
      props.volume === HIGH_VOLUME ? `${GRAY_COLOR}` : 'none'};
  }
`;
const MediumVolume = styled(VolumeControlItem)`
  > svg {
    fill: ${(props) =>
      props.volume === MEDIUM_VOLUME ? `${GRAY_COLOR}` : 'none'};
  }
`;
const LowVolume = styled(VolumeControlItem)`
  > svg {
    fill: ${(props) =>
      props.volume === LOW_VOLUME ? `${GRAY_COLOR}` : 'none'};
  }
`;
const MuteVolume = styled(VolumeControlItem)`
  > svg {
    fill: ${(props) =>
      props.volume === MUTE_VOLUME ? `${GRAY_COLOR}` : 'none'};
  }
`;

const VolumeControls = ({
  volume,
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
        <MuteVolume
          volume={volume}
          className="volume-controls-list-x"
          onClick={onVolumeMuteClick}
        >
          <VolumeX className="volume-x" role="volume-x" />
        </MuteVolume>
        <LowVolume
          volume={volume}
          className="volume-controls-list-0"
          onClick={onVolumeLowClick}
        >
          <Volume className="volume" role="volume" />
        </LowVolume>
        <MediumVolume
          volume={volume}
          className="volume-controls-list-1"
          onClick={onVolumeMediumClick}
        >
          <Volume1 className="volume-1" role="volume-1" />
        </MediumVolume>
        <HighVolume
          volume={volume}
          className="volume-controls-list-2"
          onClick={onVolumeHighClick}
        >
          <Volume2 className="volume-2" role="volume-2" />
        </HighVolume>
      </VolumeControlsList>
    </VolumeControlsContainer>
  );
};

VolumeControls.propTypes = {
  volumeMute: func.isRequired,
  volumeLow: func.isRequired,
  volumeMedium: func.isRequired,
  volumeHigh: func.isRequired,
  volume: number.isRequired,
};

export default VolumeControls;
