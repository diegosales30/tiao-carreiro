import styled from "styled-components";

export const ContainerLoading = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  svg.loader {
    width: 100px;
    height: 100px;
  }
  svg.loader path {
    fill: #25313f;
    transform-origin: center;
    animation: rotate 1.5s linear infinite;
  }
  .loaderreverse {
    animation-direction: reverse !important;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
    from {
      transform: rotate(0deg);
    }
  }
`;
