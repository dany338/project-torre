import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 50%;
  margin: 20px;
  background-color: ${props => props.theme.headerBackground} !important;
  color: rgba(255, 255, 255, 0.90);
  cursor: pointer;

  .sectionOne {
    border-bottom: 1px solid ${props => props.theme.headerActive};
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .sectionTwo {
    margin-top: 15px;
    margin-left: 89px;
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .sectionThree {
    margin: 0 auto 16px;
  }

  .right {
    margin-right: 15px;
  }

  .left {
    margin-left: 15px;
  }

  .img {
    flex-shrink: 0;
    margin-right: 12px;
    border: unset;
    border-radius: 0;
    clip-path: polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);
    transform: translateY(var(--border-width));
  }
`;

export const ItemLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  margin: 15px;

  .hexagon-border {
    clip-path: polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);
    left: calc(50% - var(--size) / 2);
    margin: 16px auto;
    position: absolute;
    top: 0;
    margin: auto;
    background-color: #5E626B;
    width: 64px;
    height: 64px;
  }

  img {
    box-shadow: var(--box-shadow);
    border-color: #5E626B;
    background: none!important;
    object-fit: cover;
    width: 64px;
    height: 64px;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .main-title {
    color: ${props => props.theme.headerActive};
    font-size: 16px;
    font-weight: 400;
    letter-spacing: .01em;
    line-height: 20px;
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .second-text {
    margin: 3px 0;
    display: block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(255, 255, 255, 0.65);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: .02em;
  }
`;

export const ItemRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  width: 50%;
  margin: 15px;
`;

export default Container;
