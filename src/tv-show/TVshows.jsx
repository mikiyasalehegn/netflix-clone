import React from "react";
import Banner from "../banner/Banner";
import Row from "../row/Row";
import requestUrls from "../requests";

function TVshows() {
  return (
    <>
      <Banner fetchUrl={requestUrls.fetchTVshow} />
      <Row title="TV Shows" fetchUrl={requestUrls.fetchTVshow} posterLarge />
    </>
  );
}

export default TVshows;
