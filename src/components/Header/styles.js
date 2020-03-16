import styled from 'styled-components';

export const MainHeader = styled.header`
  display: flex;
  background: #ffe;
  flex-direction: row;
  border-bottom: 1px solid #ccc;
  justify-content: space-around;
  height: 80px;
  width: 100%;
  align-items: center;
  > img {
    width: 200px;
    height: 60px;
    &:hover {
      cursor: pointer;
    }
  }
  input {
    height: 35px;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 18px;
    border-radius: 2px;
  }
  .actions {
    display: flex;
    width: 300px;
    justify-content: space-evenly;
    height: 100%;
    align-items: center;
    padding: 0 10px;
    svg {
      display: flex;
      color: #fff;
      flex: 1;
      stroke: #000;
      stroke-width: 30px;
      transition: color 0.25s;
      &:first-child {
        stroke-width: 1px;
      }
      &:hover {
        cursor: pointer;
        color: #000;
      }
    }
    img {
      width: 50px;
      height: 50px;
      border: 1px solid #ccc;
      border-radius: 50%;
      background-color: #ccc;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
