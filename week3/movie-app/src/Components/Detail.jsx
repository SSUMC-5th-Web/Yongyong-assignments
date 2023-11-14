function Detail({ title, overview, onMouseEnter }) {
  return (
    <div className="detail">
      <span className="detail_title">{title}</span>
      <span>
        {overview.length > 30 ? `${overview.slice(0, 30) + "..."}` : overview}
      </span>
    </div>
  );
}

export default Detail;
