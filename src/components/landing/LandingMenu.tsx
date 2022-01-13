import styled from "styled-components";
import { Config } from "../../config";

const { menus } = Config;
const LandingMenu = () => {
  return (
    <StyledMenu>
      {menus.map(m => (
        <StyledLink href={m.url} target="_blank" rel="noopener noreferrer">
          {m.title}
        </StyledLink>
      ))}
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

  & + & {
    margin-top: 8px;
  }
`;

export default LandingMenu;
