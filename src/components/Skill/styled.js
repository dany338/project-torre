import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: none;
  border: 1px solid #c2c2c2;
  border-radius: 2px;
  color: hsla(0,0%,100%,.9);
  height: 32px;
  line-height: 100%;
  margin-right: 6px;
  padding: 8px 16px;

  .right {
    margin-right: 15px;
  }

  span {
    font-size: 14px;
  }
`;

export default Container;
