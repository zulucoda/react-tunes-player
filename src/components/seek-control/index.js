import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import device from '../../utils/devices';
import { formatSeekTime } from '../../utils/util';

const SeekControlGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: 2em auto 2em;
    justify-items: center;
    align-items: center;
  }
`;

const SeekControlTime = styled.span`
  font-family: 'Source Sans Pro', 'Helvetica', 'Arial', sans-serif;
  font-size: 12px;
  line-height: 1.5;
`;

const SeekControlProgress = styled.progress`
  display: none;
  width: calc(100% - 1em);
  height: 0.5em;

  /* Reset the default appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  /* Get rid of default border in Firefox. */
  border: none;
  background-size: auto;
  background: #7b818a;

  ::-webkit-progress-value {
    background: #ffffff;
  }

  ::-moz-progress-bar {
    background: #ffffff;
  }

  @media ${device.tablet} {
    display: inline;
  }
`;

const SeekControl = ({
  tuneDuration,
  seekTimeTune,
  setSeekTimeTune,
  setTriggerCurrentTime,
  setDrag,
  drag,
}) => {
  const seekControlProgress = useRef(null);

  const onTuneSeek = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const clickedValue = (x * e.target.max) / e.target.offsetWidth;

    setSeekTimeTune(clickedValue);
    setTriggerCurrentTime(true);
  };

  const endTuneSeekDrag = () => setDrag(false);
  const starTuneSeekDrag = () => setDrag(true);
  const tuneSeekDragging = (e) => (drag ? onTuneSeek(e) : 'clicked');

  useEffect(() => {
    seekControlProgress.current.addEventListener('click', onTuneSeek);
    seekControlProgress.current.addEventListener('mousedown', endTuneSeekDrag);
    seekControlProgress.current.addEventListener('mousemove', starTuneSeekDrag);
    seekControlProgress.current.addEventListener('mouseup', tuneSeekDragging);
    return () => {
      seekControlProgress.current.removeEventListener('click', onTuneSeek);
      seekControlProgress.current.removeEventListener(
        'mousedown',
        endTuneSeekDrag,
      );
      seekControlProgress.current.removeEventListener(
        'mousemove',
        starTuneSeekDrag,
      );
      seekControlProgress.current.removeEventListener(
        'mouseup',
        tuneSeekDragging,
      );
    };
  }, [tuneDuration, drag]);

  return (
    <SeekControlGrid className="seek-control" role="seek-control">
      <SeekControlTime
        className="seek-control-time-progress"
        role="seek-control-time-progress"
      >
        {formatSeekTime(seekTimeTune)}
      </SeekControlTime>
      <SeekControlProgress
        ref={seekControlProgress}
        max={tuneDuration}
        value={seekTimeTune}
        className="seek-control-progress"
      ></SeekControlProgress>
      <SeekControlTime
        className="seek-control-time-total"
        role="seek-control-time-total"
      >
        {formatSeekTime(tuneDuration)}
      </SeekControlTime>
    </SeekControlGrid>
  );
};

export default SeekControl;
