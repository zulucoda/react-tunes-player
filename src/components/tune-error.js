/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/08/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React from 'react';
import { WarningText, WarningWrapper } from '../utils/styles';

const TuneError = ({ currentTune }) => (
  <WarningWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M32 464h448L256 48 32 464zm248-64h-48v-48h48v48zm0-80h-48v-96h48v96z" />
    </svg>
    <WarningText>
      <p>
        Warning! Error while trying to load tune{' '}
        <strong>{currentTune.name}</strong>.
      </p>
      <p>
        Is the tune source <strong>{currentTune.tune}</strong> correct?
      </p>
    </WarningText>
  </WarningWrapper>
);

export default TuneError;
