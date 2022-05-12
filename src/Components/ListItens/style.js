import styled from "styled-components";

export const ContainerList = styled.div`
  width: 100vw;
  height: 600px;

  max-width: 900px;
  margin: auto;
  display: Flex;
  flex-direction: column;
  background-color: rgba(235, 235, 235, 0.9);
`;

export const BoxList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #4c89e3;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  h4 {
    margin-left: 15px;
    font-size: 25px;
  }
  button {
    width: 100px;
    border: none;

    color: #4c89e3;
    border-radius: 20px;
    margin-right: 15px;
    background-color: white;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const BoxItens = styled.main`
  ul {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px;
    margin-top: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    header {
      display: flex;
      justify-content: space-between;
      h2 {
        font-size: 16px;
      }
      div {
        button {
          height: 30px;
          width: 120px;
          margin-left: 5px;
          border: none;
          background-color: #4c89e3;
          color: white;
          border-radius: 10px;
          &:hover {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
          }
        }
      }
    }

    section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      border-bottom: 1px solid #ccc;
      &:hover {
        cursor: pointer;
      }
    }
    div {
      display: flex;
      margin-left: 30px;

      div {
        display: flex;
        flex-direction: column;
        p {
          font-size: 14px;
          color: #808080;
        }
      }
    }
    aside {
      display: flex;
      margin-right: 15px;
      div {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        p {
          font-size: 14px;
          color: grey;
        }
        button {
          border: none;
          font-size: 23px;
          background-color: transparent;
          color: #ff6961;
          &:hover {
            color: #800;
          }
        }
      }
    }
  }
`;

export const Main = styled.main`
  overflow-y: scroll;
`;
