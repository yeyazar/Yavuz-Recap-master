import styled from "styled-components";

const HeaderText = styled.h1`
  color: ${({ giveColor }) => (giveColor || "black")};
  background-color: ${({ bgColor }) => (bgColor || "black")};
  font-size: 2rem;
  text-align: center;
`;

export default HeaderText;
