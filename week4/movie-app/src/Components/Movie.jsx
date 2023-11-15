import * as movie from "./Movie.style.jsx";
import Detail from "./Detail.jsx";
import styled from "styled-components";

const StyledInfo = styled.div`
  display: flex;
  color: white;
  background-color: rgb(28, 52, 124);
  height: max-content;
  justify-content: space-between;
  padding: 8px;
`;

function Movie(item) {
  return (
    <movie.StyledMovie>
      <img src={item.coverImg} />
      <StyledInfo>
        <movie.StyledMovieSpan>
          {item.title.length > 7 ? item.title.slice(0, 7) + "..." : item.title}
        </movie.StyledMovieSpan>
        <movie.StyledMovie>{item.vote_average}</movie.StyledMovie>
      </StyledInfo>
      <Detail title={item.title} overview={item.overview} />
    </movie.StyledMovie>
  );
}

export default Movie;
