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
  border: 1px solid #ccc;
`;

export const BoxItens = styled.aside`
  margin-top: 15px;
  box-shadow: 0 0 10px black;
  div {
    display: flex;
    justify-content: space-between;
  }
  h2 {
    font-size: 20px;
    text-align: center;
  }
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    border: 1px solid #ccc;
    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  }
  div {
    display: flex;
    margin-left: 30px;

    div {
      display: flex;
      flex-direction: column;
    }
  }
  aside {
    display: flex;
    margin-right: 15px;
    div {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
    }
  }
`;
