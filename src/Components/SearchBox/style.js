import styled from "styled-components";

export const BoxSearch = styled.div`
  width: 100vw;
  height: 100px;

  max-width: 900px;
  margin: auto;
  display: Flex;

  flex-direction: column;
  justify-content: center;
  label {
    margin-left: 15px;
    margin-bottom: 10px;
    color: grey;
  }
  div {
    display: flex;
    justify-content: space-between;

    input {
      width: 70%;
      height: 50px;
      border: none;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      margin-left: 15px;
      padding: 0 15px;
    }
    button {
      width: 25%;
      border: none;
      border-radius: 30px;
      margin-right: 10px;
      background-color: #4c89e3;
      color: white;
    }
  }
`;
