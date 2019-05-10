import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;
export const Repository = styled.div`
  width: 250px;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 64px;
    }
    strong {
      font-size: 24px;
      margin-top: 10px;
    }
    small {
      font-size: 14px;
      color: #666;
    }
  }
  ul {
    list-style: none;
    li {
      font-weight: bold;
      padding: 12px 20px;
      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-family: italic;
      }
      &:nth-child(2n-1) {
        background-color: #f5f5f5;
      }
    }
  }
  button {
    background: #52d89f;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    &:hover {
      background: #42c48d;
    }
  }
`;
