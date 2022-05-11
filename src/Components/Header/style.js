import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100vw;
  height: 100px;

  max-width: 900px;
  margin: auto;
  display: Flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  img {
    margin-left: 15px;
  }
  h1 {
    margin-right: 15px;
    font-weight: 100;
    color: grey;
  }
`;
