import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 2560px;
  margin: 0 auto;

  header {
    height: 55px;
    width: 100%;
  }

  main {
    height: calc(100vh - 115px);
    width: 100%;
  }

  footer {
    height: 290px;
    background-color: #272727;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  /* justify-content: stretch; */
`;
