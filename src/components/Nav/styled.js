import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 0px 15px;
  background-color: ${props => props.theme.headerBackground} !important;
  color: ${props => props.theme.headerText};
  height: 112px;

  span {
    color: ${props => props.theme.torreColor};
    font-size: 20px;
    font-weight: bold;
    line-height: 20px;
    vertical-align: middle;
    letter-spacing: 2px;
  }
`;

export const ItemTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 15px 0px;
`;

export const ItemButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LinkPage = styled(Link)`
  width: auto;
  cursor: pointer;
  color: ${props => props.active ? `${props.theme.headerActive}` : `${props.theme.headerText}` };
  text-transform: uppercase;
  font-family: inherit;
  font-size: 14px;
  font-style: inherit;
  font-variant: inherit;
  font-weight: 600;
  letter-spacing: inherit;
  text-align: center;
  transition: all .4s cubic-bezier(.25,.8,.25,1);
  user-select: none;
  vertical-align: top;
  margin: 15px 15px;
  &:hover {
    color: ${props => props.theme.hoverColor};
  }
`;

export default Container;
