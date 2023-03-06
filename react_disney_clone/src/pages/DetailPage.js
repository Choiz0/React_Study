import React from "react";
import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";

const DetailPage = () => {
  let { movieId } = useParams();
  const [detail, setDetail] = useMovie(`/movie/${movieId}`);

  if (!detail) return null;

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
        alt="img"
      />
    </section>
  );
};

export default DetailPage;
