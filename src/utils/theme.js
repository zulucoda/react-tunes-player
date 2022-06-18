import styled from 'styled-components';
import device from './devices';

const DARK_COLOR = '#181818';
const LIGHT_COLOR = '#eef2f7';

export const PlayerGrid = styled.div`
  background: ${DARK_COLOR};
  display: grid;
  color: ${LIGHT_COLOR};
  grid-template-columns: 1fr 2fr 1fr;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 90px;
  grid-gap: 0.5em;

  // tablet
  @media ${device.tablet} {
    grid-gap: 0.5em;
    grid-template-columns: 2fr 1fr 3fr;
  }

  // desktop
  @media ${device.laptop} {
    grid-gap: 2em;
    grid-template-columns: 2fr 1fr 3fr 1fr;
  }
`;
