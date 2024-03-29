import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100vw;
  height: 100px;

  max-width: 900px;
  margin: auto;
  display: Flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  img {
    margin-left: 15px;
  }
  h1 {
    margin-right: 15px;
    font-weight: 100;
    color: grey;
  }
  @media (max-width: 477px) {
    display: flex;
    justify-content: center;
    h1 {
      display: none;
    }
  }
`;
