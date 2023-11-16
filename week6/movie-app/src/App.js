import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Movies from "./pages/Movies.jsx";
import TV from "./pages/TV";
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import GlobalStyle from "./GlobalStyles.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/*" element={<Movies />} />
          <Route path="/detail/:id" element={<MovieDetail />} />
          <Route path="/tv/*" element={<TV />} />
          <Route path="/person/*" element={<Celebrity />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
