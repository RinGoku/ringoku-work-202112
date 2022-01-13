import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Config } from "../../config";
import { fadeIn } from "../styles/animation";

const { socialLinks } = Config;

const LandingFooter = () => {
  return (
    <Wrapper>
      <Inner>
        {socialLinks.map(link => (
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={link.icon} color="#000"></FontAwesomeIcon>
          </a>
        ))}
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 24px;
  display: flex;
  z-index: 2;
  width: 100vw;
  align-items: center;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-in-out 0.8s;
  animation-fill-mode: forwards;
`;

const Inner = styled.div`
  display: flex;
  column-gap: 8px;
  font-size: 1.8rem;
`;

export default LandingFooter;
