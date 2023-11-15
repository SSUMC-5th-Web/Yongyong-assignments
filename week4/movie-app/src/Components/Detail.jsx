import * as detail from "./Detail.style.jsx";
import GlobalStyle from "../GlobalStyles.jsx";
function Detail({ title, overview }) {
  console.log(overview);
  return (
    <detail.StyledDetail>
      <detail.StyledDetailTitle>{title}</detail.StyledDetailTitle>
      <detail.StyledDetailSpan>
        {overview.length > 30 ? `${overview.slice(0, 30) + "..."}` : overview}
      </detail.StyledDetailSpan>
    </detail.StyledDetail>
  );
}

export default Detail;
