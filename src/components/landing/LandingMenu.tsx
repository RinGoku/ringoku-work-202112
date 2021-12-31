import styled from "styled-components";

const LandingMenu = () => {
  return (
    <StyledMenu>
      <StyledLink
        href="https://hello-world-blog.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Blog
      </StyledLink>
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  margin-top: 48px;
  font-weight: bold;
  font-size: 24px;
`;

const StyledLink = styled.a`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  color: #000;
  text-decoration: none;
`;

export default LandingMenu;
