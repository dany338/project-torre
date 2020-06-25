import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 15px;
  background-color: ${props => props.theme.headerBackground} !important;
  color: ${props => props.theme.headerText};
  height: 56px;

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

  span {
    color: ${props => props.theme.torreColor};
    font-size: 20px;
    font-weight: bold;
    line-height: 20px;
    vertical-align: middle;
    letter-spacing: 2px;
  }
`;

export const ItemRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default Container;
