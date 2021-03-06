import styled, { keyframes } from "styled-components";
import { fadeIn } from "../styles/animation";
import LandingFooter from "./LandingFooter";
import LandingMenu from "./LandingMenu";

const LandingTitle = () => {
  return (
    <Wrapper>
      <Title>
        Hello, World!
        <LandingMenu />
      </Title>
      <LandingFooter />
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

const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  animation: ${fadeIn} 0.8s ease-in-out;
`;

export default LandingTitle;
