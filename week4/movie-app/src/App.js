import GlobalStyle from "./GlobalStyles";
import { movies } from "./movieDummy";
import Movie from "./Components/Movie";
import styled from "styled-components";

const StyledAppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 90%;
  margin: 20px auto;
  font-size: 13px;
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <StyledAppContainer>
        {movies.results.map((item) => {
          return (
            <Movie
              key={item.id}
              coverImg={item.poster_path}
              title={item.title}
              vote_average={item.vote_average}
              overview={item.overview}
            />
          );
        })}
      </StyledAppContainer>
    </>
  );
}

export default App;
