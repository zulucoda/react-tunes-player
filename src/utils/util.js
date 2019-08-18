/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/08/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
const findIndex = (tunes, currentTune) =>
  tunes && tunes.length
    ? tunes.findIndex(t => t.name === currentTune.name)
    : -1;

export const setPreviousTune = (tunes, currentTune, setCurrentTune) => {
  const previous = findIndex(tunes, currentTune) - 1;
  previous <= -1
    ? setCurrentTune(tunes[tunes.length - 1])
    : setCurrentTune(tunes[previous]);
};

export const setNextTune = (tunes, currentTune, setCurrentTune) => {
  const next = findIndex(tunes, currentTune) + 1;
  next >= tunes.length ? setCurrentTune(tunes[0]) : setCurrentTune(tunes[next]);
};
