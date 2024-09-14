import React from "react";
import Banner from "./banner/Banner";
import Row from "./row/Row";
// import Topten from "./topten/Topten";
import requestUrls from "./requests";

function Home() {
  return (
    <>
      <Banner fetchUrl={requestUrls.fetchNetflixOriginals} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requestUrls.fetchNetflixOriginals}
        posterLarge
      />
      <Row title="Trending Now" fetchUrl={requestUrls.fetchTrending} />
      <Row title="Upcoming" fetchUrl={requestUrls.fetchUpcoming} />
      <Row title="Popular" fetchUrl={requestUrls.fetchPopular} />
      <Row title="Top Rated" fetchUrl={requestUrls.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requestUrls.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requestUrls.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requestUrls.fetchHorrorMovies} />
      <Row title="Romace Movies" fetchUrl={requestUrls.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requestUrls.fetchDocumentaries} />
    </>
  );
}

export default Home;
