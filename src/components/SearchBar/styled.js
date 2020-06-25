import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0px 15px;
  background-color: ${props => props.theme.headerBackground} !important;
  color: ${props => props.theme.headerText};
  height: 56px;
  border-radius: 28px;
  margin-bottom: 0;
  border-color: ${props => props.theme.headerText};

  .right {
    margin-right: 15px;
  }

  .left {
    margin-left: 15px;
  }
`;

export const ItemLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  span {
    color: ${props => props.theme.hoverColor};
    font-size: 20px;
    font-weight: bold;
    line-height: 20px;
    vertical-align: middle;
    letter-spacing: 2px;
  }

  input {
    padding: 0!important;
    color: rgba(255, 255, 255, 0.90);
    line-height: 1;
    margin-top: -3px;
    -webkit-box-flex: 1;
    flex: 1;
    width: 128px;
    display: flex;
    font-family: inherit;
    font-size: 16px;
    background-color: transparent;
    border: none!important;
    resize: none;
    transition: all .4s cubic-bezier(.25,.8,.25,1);
    transition-property: font-size;
    z-index: 1;
  }
`;

export const ItemRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default Container;
