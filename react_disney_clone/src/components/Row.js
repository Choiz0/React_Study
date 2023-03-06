import React, { useState } from "react";
import useMovie from "../hooks/useMovie";
import MovieModal from "./MovieModal";

const Row = React.memo(({ request, title, id }) => {
  const [movies] = useMovie(request);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelelcted, setMovieSelection] = useState({});

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelection(movie);
  };

  return (
    <div className="container">
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            {"<"}
          </span>
        </div>
        <div className="row__posters" id={id}>
          {movies &&
            movies.results &&
            movies.results.map((movie) => (
              <img
                key={movie.id}
                className="row__poster"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                width="349px"
                alt={movie.title}
                onClick={() => handleClick(movie)}
              />
            ))}
          {modalOpen && (
            <MovieModal {...movieSelelcted} setModalOpen={setModalOpen} />
          )}
        </div>
        <div className="slider__arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
          >
            {">"}
          </span>
        </div>
      </div>
    </div>
  );
});

export default Row;
