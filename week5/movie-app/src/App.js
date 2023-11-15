import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Movies from "./pages/Movies.jsx";
import TV from "./pages/TV";
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home.jsx";
import GlobalStyle from "./GlobalStyles.jsx";
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
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/*" element={<Movies />} />
          <Route path="/tv/*" element={<TV />} />
          <Route path="/person/*" element={<Celebrity />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
