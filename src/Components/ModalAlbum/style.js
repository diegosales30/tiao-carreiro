import styled from "styled-components";

export const ContainerModal = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 30%;
  right: 50%;
  h3 {
    text-align: center;
  }

  div {
    width: 320px;
    height: 280px;
    border-radius: 20px;
    position: absolute;
    background-color: white;
  }
`;

export const BoxInput = styled.section`
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  aside {
    top: 0;
    right: 0;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    margin-right: 5px;
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

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 320px;

    input,
    button {
      margin: auto;
      border-radius: 10px;
      border: none;
      border: 1px solid rgba(0, 0, 0, 0.4);
      width: 80%;
      height: 40px;
      &:placeholder-shown {
        padding: 5px;
      }
    }
    button {
      background-color: #4c89e3;
      border: none;
      color: white;
    }
  }
`;
