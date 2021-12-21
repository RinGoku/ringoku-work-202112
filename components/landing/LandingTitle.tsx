import styled, { keyframes } from "styled-components";

const LandingTitle = () => {
  return (
    <Wrapper>
      <Title>Hello, World!</Title>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  animation: ${fadeIn} 0.8s ease-in-out;
`;

export default LandingTitle;
