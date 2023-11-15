import Detail from "./Detail";
function Movie(item) {
  const hover = (event) => {
    console.log(event.target.classLiset);
    event.target.children.classList.remove("hide");
  };
  return (
    <div className="movie">
      <img src={item.coverImg} />
      <div className="info">
        <span className="title">
          {item.title.length > 7 ? item.title.slice(0, 7) + "..." : item.title}
        </span>
        <span className="vote_average">{item.vote_average}</span>
      </div>
      <Detail title={item.title} overview={item.overview} />
    </div>
  );
}

export default Movie;
