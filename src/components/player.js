/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/08/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React, { useEffect, useState } from 'react';
import { arrayOf, exact, string } from 'prop-types';
import {
  HIGH_VOLUME,
  LOW_VOLUME,
  MEDIUM_VOLUME,
  MUTE_VOLUME,
} from '../utils/constants';
import {
  AudioWrapper,
  Controls,
  CurrentAlbumPlaying,
  HighVolume,
  LowVolume,
  MainWrapper,
  MediumVolume,
  MuteVolume,
  NextTune,
  NowPlaying,
  PauseTune,
  PlayTune,
  PreviousTune,
  ReactTunePlayerContainer,
  SeekTime,
  SeekTune,
  TunesInner,
  TunesWrapper,
  Volume,
} from '../utils/styles';
import { NoTunes } from './no-tunes';
import { setNextTune, setPreviousTune } from '../utils/util';
import { Audio } from './audio';
import { Progress } from './progress';

export const Player = ({ tunes = [] }) => {
  const [currentTune, setCurrentTune] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(HIGH_VOLUME);
  const [seekTimeTune, setSeekTimeTune] = useState(0);
  const [tuneDuration, setTuneDuration] = useState(0);
  const [triggerCurrentTime, setTriggerCurrentTime] = useState(false);
  const [drag, setDrag] = useState(false);

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
    resetTimeAndDuration();
    setPreviousTune(tunes, currentTune, setCurrentTune);
  };

  if (tunes.length === 0)
    return (
      <ReactTunePlayerContainer>
        <TunesInner>
          <NoTunes />
        </TunesInner>
      </ReactTunePlayerContainer>
    );

  if (!currentTune) return null;

  return (
    <ReactTunePlayerContainer>
      <TunesInner>
        <TunesWrapper>
          <MainWrapper>
            <CurrentAlbumPlaying>
              <img
                data-testid="current-tune-album-art"
                alt={currentTune.name}
                src={currentTune.album}
              />
            </CurrentAlbumPlaying>
            <NowPlaying>
              <span data-testid="current-tune-name">{currentTune.name}</span>
            </NowPlaying>
            <Controls>
              <PreviousTune
                title="Previous tune"
                onClick={() => {
                  resetTimeAndDuration();
                  setPreviousTune(tunes, currentTune, setCurrentTune);
                }}
                data-testid="previous-tune"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M170.7 256L448 448V64L170.7 256zM64 64h64v384H64z" />
                </svg>
              </PreviousTune>
              <PlayTune
                isPlaying={isPlaying}
                title="Play tune"
                onClick={() => setIsPlaying(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M96 52v408l320-204L96 52z" />
                </svg>
              </PlayTune>
              <PauseTune
                isPlaying={isPlaying}
                title="Pause tune"
                onClick={() => setIsPlaying(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M96 448h106.7V64H96v384zM309.3 64v384H416V64H309.3z" />
                </svg>
              </PauseTune>
              <NextTune
                title="Next tune"
                onClick={() => {
                  resetTimeAndDuration();
                  setNextTune(tunes, currentTune, setCurrentTune);
                }}
                data-testid="next-tune"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M64 64v384l277.3-192L64 64zM384 64h64v384h-64z" />
                </svg>
              </NextTune>
            </Controls>
            <SeekTune>
              <Progress
                seekTimeTune={seekTimeTune}
                tuneDuration={tuneDuration}
                setSeekTimeTune={setSeekTimeTune}
                setTriggerCurrentTime={setTriggerCurrentTime}
                drag={drag}
                setDrag={setDrag}
              />
            </SeekTune>
            <SeekTime>
              {`${seekTimeTune > 0 ? (seekTimeTune / 60).toFixed(2) : 0} / ${
                tuneDuration > 0 ? (tuneDuration / 60).toFixed(2) : 0
              }`}
            </SeekTime>
            <Volume>
              <HighVolume
                volume={volume}
                onClick={() => setVolume(HIGH_VOLUME)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64zm288 64c0-38.399-21.333-72.407-53.333-88.863v176.636C330.667 328.408 352 294.4 352 256zM298.667 64v44.978C360.531 127.632 405.334 186.882 405.334 256c0 69.119-44.803 128.369-106.667 147.022V448C384 428.254 448 349.257 448 256c0-93.256-64-172.254-149.333-192z" />
                </svg>
              </HighVolume>
              <MediumVolume
                volume={volume}
                onClick={() => setVolume(MEDIUM_VOLUME)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64zm288 64c0-38.399-21.333-72.407-53.333-88.863v176.636C330.667 328.408 352 294.4 352 256z" />
                </svg>
              </MediumVolume>
              <LowVolume volume={volume} onClick={() => setVolume(LOW_VOLUME)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64z" />
                </svg>
              </LowVolume>
              <MuteVolume
                volume={volume}
                onClick={() => setVolume(MUTE_VOLUME)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M405.5 256c0 22.717-4.883 44.362-13.603 63.855l31.88 31.88C439.283 323.33 448 290.653 448 256c0-93.256-64-172.254-149-192v44.978C361 127.632 405.5 186.882 405.5 256zM256 80.458l-51.021 52.48L256 183.957zM420.842 396.885L91.116 67.157l-24 24 90.499 90.413-8.28 10.43H64v128h85.334L256 431.543V280l94.915 94.686C335.795 387.443 318 397.213 299 403.022V448c31-7.172 58.996-22.163 82.315-42.809l39.61 39.693 24-24.043-24.002-24.039-.081.083z" />
                  <path d="M352.188 256c0-38.399-21.188-72.407-53.188-88.863v59.82l50.801 50.801A100.596 100.596 0 0 0 352.188 256z" />
                </svg>
              </MuteVolume>
            </Volume>
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
              />
            </AudioWrapper>
          </MainWrapper>
        </TunesWrapper>
      </TunesInner>
    </ReactTunePlayerContainer>
  );
};

Player.propTypes = {
  tunes: arrayOf(
    exact({
      tune: string.isRequired,
      name: string.isRequired,
      album: string.isRequired,
    }),
  ).isRequired,
};
