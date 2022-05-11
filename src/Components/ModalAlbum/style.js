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
  aside {
    top: 0;
    right: 0;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    margin-right: 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 320px;

    input,
    button {
      margin: auto;
      margin-top: 10px;
      width: 80%;
      height: 40px;
    }
  }
`;
