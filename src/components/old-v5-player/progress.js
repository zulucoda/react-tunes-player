/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/08/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React, { useRef, useEffect } from 'react';

export const Progress = ({
  tuneDuration,
  seekTimeTune,
  setSeekTimeTune,
  setTriggerCurrentTime,
  setDrag,
  drag,
}) => {
  const progressSeek = useRef(null);

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
    progressSeek.current.addEventListener('click', onTuneSeek);
    progressSeek.current.addEventListener('mousedown', endTuneSeekDrag);
    progressSeek.current.addEventListener('mousemove', starTuneSeekDrag);
    progressSeek.current.addEventListener('mouseup', tuneSeekDragging);
    return () => {
      progressSeek.current.removeEventListener('click', onTuneSeek);
      progressSeek.current.removeEventListener('mousedown', endTuneSeekDrag);
      progressSeek.current.removeEventListener('mousemove', starTuneSeekDrag);
      progressSeek.current.removeEventListener('mouseup', tuneSeekDragging);
    };
  }, [tuneDuration, drag]);

  return (
    <progress
      ref={progressSeek}
      max={tuneDuration}
      value={seekTimeTune}
      data-testid="current-tune-progress-bar"
    />
  );
};
