/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/08/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React, { useRef, useEffect } from 'react';

export const Audio = ({
  currentTune,
  isPlaying,
  volume,
  onEnded,
  setTuneDuration,
  setSeekTimeTune,
  seekTimeTune,
  triggerCurrentTime,
  setTriggerCurrentTime,
  setIsLoading,
  setOnError,
}) => {
  const currentTuneAudio = useRef();

  const tuneSeekTimeUpdate = e => {
    setTuneDuration(Number.isNaN(e.target.duration) ? 0 : e.target.duration);
    setSeekTimeTune(e.target.currentTime);
  };

  const onTuneLoaded = () => {
    setIsLoading(false);
  };

  const onTuneStalled = () => {
    setIsLoading(false);
    setOnError(true);
  };

  const onTuneError = () => {
    setIsLoading(false);
    setOnError(true);
  };

  useEffect(() => {
    currentTuneAudio.current.addEventListener('timeupdate', tuneSeekTimeUpdate);

    if (isPlaying) {
      currentTuneAudio.current.play();
    } else {
      currentTuneAudio.current.pause();
    }

    currentTuneAudio.current.volume = volume;
    currentTuneAudio.current.currentTime = seekTimeTune;

    setTriggerCurrentTime(false);

    return () => {
      currentTuneAudio.current.removeEventListener(
        'timeupdate',
        tuneSeekTimeUpdate,
      );
    };
  }, [currentTune, isPlaying, volume, triggerCurrentTime]);

  useEffect(() => {
    currentTuneAudio.current.addEventListener('ended', onEnded);
    currentTuneAudio.current.addEventListener('loadeddata', onTuneLoaded);
    currentTuneAudio.current.addEventListener('stalled', onTuneStalled);
    currentTuneAudio.current.addEventListener('error', onTuneError);

    return () => {
      currentTuneAudio.current.removeEventListener('ended', onEnded);
      currentTuneAudio.current.removeEventListener('loadeddata', onTuneLoaded);
      currentTuneAudio.current.removeEventListener('stalled', onTuneStalled);
      currentTuneAudio.current.removeEventListener('error', onTuneError);
    };
  }, [currentTune]);

  return <audio controls ref={currentTuneAudio} src={currentTune.tune} />;
};
