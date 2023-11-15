import React from "react";
import Ad from "./Ad";
import { useState } from "react";
import styled from "styled-components";

const StyledAdButton = styled.button`
  width: 80px;
  height: 30px;
`;
export default function AdPage() {
  const [adState, setAdState] = useState(true);
  const handleClick = () => {
    if (adState == true) {
      setAdState(false);
    } else setAdState(true);
  };
  return (
    <div>
      <Ad adState={adState}></Ad>
      <StyledAdButton onClick={handleClick}>
        {adState ? "광고 닫기" : "광고 열기"}
      </StyledAdButton>
    </div>
  );
}
