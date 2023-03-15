import styled, {css} from "styled-components";

const Links = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    font-weight: 700;
  }

  ${({small}) => small && css`
    background-color: black;
    color: #61DBFB;
    padding: 0.3rem;
    margin-top: 1rem;
  `}
  /* ... */
`;

export default Links;
