import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import requests from "../api/request";
import styled from "styled-components";
import useMovie from "../hooks/useMovie";

const Banner = () => {
  const [movie, setMovie] = useMovie(requests.fetchNowPlaying);
  const [banner, setBanner] = useState([]);

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (movie && movie.results) {
      const movieId =
        movie.results[Math.floor(Math.random() * movie.results.length)].id;
      const fetchMovieDetails = async () => {
        const response = await axios.get(`movie/${movieId}`, {
          params: { append_to_response: "videos" },
        });
        setBanner(response.data);
      };
      fetchMovieDetails();
    }
  }, [movie, setMovie]);

  const truncate = (text, cut) => {
    if (text.length > cut) {
      return (text = text.substring(0, cut));
    }
    return text;
  };

  if (banner.length === 0) {
    return <div>Loading...</div>;
  }

  if (clicked) {
    return (
      <>
        <Container>
          <HomeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${banner.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1`}
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
            ></Iframe>
          </HomeContainer>
        </Container>
        <button onClick={() => setClicked(false)}>X</button>
      </>
    );
  } else {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${banner?.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">{banner && banner.title}</h1>
          <div className="banner__buttons">
            {banner?.videos?.results[0]?.key && (
              <button
                className="banner__button play"
                onClick={() => setClicked(true)}
              >
                play
              </button>
            )}
          </div>
          <h1 className="banner__description">
            {truncate(banner && banner.overview, 200) + "..."}
          </h1>
        </div>
      </header>
    );
  }
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
export default Banner;
