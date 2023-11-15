import * as movie from "./Movie.style.jsx";
import Detail from "./Detail.jsx";

function Movie({ key, coverImg, title, vote_average, overview }) {
  return (
    <movie.StyledMovie>
      <img src={coverImg} />
      <movie.StyledInfo>
        <movie.StyledMovieSpan>
          {title.length > 7 ? title.slice(0, 7) + "..." : title}
        </movie.StyledMovieSpan>
        <movie.StyledMovie>{vote_average}</movie.StyledMovie>
      </movie.StyledInfo>
      <Detail title={title} overview={overview} />
    </movie.StyledMovie>
  );
}

export default Movie;
