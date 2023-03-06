import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Row from "../components/Row";
import requests from "../api/request";
import Nav from "../components/Nav";

const MainPage = () => {
  return (
    <Container>
      <Nav />
      <Banner />
      <Category />
      <Row request={requests.feachTrending} title={"Trending"} id={"tr"} />
      <Row request={requests.fetchTopRated} title={"Top Rated"} id={"top"} />
      <Row
        request={requests.fetchActionMovies}
        title={"Action Movies"}
        id={"ac"}
      />
      <Row
        request={requests.fetchComedyMovies}
        title={"Comedy Movies"}
        id={"cm"}
      />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw +5px);

  &:after {
    background: url(/images/home-background.png) center center / cover no-repeat
      fixed;
    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;

export default MainPage;
