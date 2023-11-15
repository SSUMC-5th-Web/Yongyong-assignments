import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 20px;
  padding: 20px 100px;
  background-color: rgb(0, 20, 102);
`;

const StyledHeaderLink = styled.div`
  color: white;
  background-color: rgb(0, 20, 102);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding-right: 20px;
  background-color: rgb(0, 20, 102);
`;

const StyledLogo = styled.img`
  padding-right: 20px;
  background-color: rgb(0, 20, 102);
`;

function Header() {
  return (
    <StyledHeader>
      <Link to="./">
        <StyledLogo
          style={{ width: "154px", height: "20px" }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>
      <StyledHeaderLink>
        <StyledLink to="./movies">영화</StyledLink>
      </StyledHeaderLink>
      <StyledHeaderLink>
        <StyledLink to="./tv">TV 프로그램</StyledLink>
      </StyledHeaderLink>
      <StyledHeaderLink>
        <StyledLink to="./person">인물</StyledLink>
      </StyledHeaderLink>
    </StyledHeader>
  );
}

export default Header;
