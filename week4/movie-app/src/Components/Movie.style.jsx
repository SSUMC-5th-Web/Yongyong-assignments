import styled from "styled-components";
import { StyledDetail } from "./Detail.style";

export const StyledMovie = styled.div`
  height: min-content;
  box-shadow: 1px;
  margin: 0 5px 20px 5px;
  background-color: rgb(28, 52, 124);
  position: relative;

  &:hover ${StyledDetail} {
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.78);
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    color: white;
    padding: 10px;
  }
`;

export const StyledMovieSpan = styled.span`
  width: 80%;
  background-color: rgb(28, 52, 124);
`;
