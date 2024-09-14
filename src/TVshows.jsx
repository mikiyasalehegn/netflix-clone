import React from "react";
import Banner from "./Banner";
import Row from "./Row";
import requestUrls from "./requests";

function TVshows() {
  return (
    <>
      <Banner fetchUrl={requestUrls.fetchTVshow} />
      <Row title="TV Shows" fetchUrl={requestUrls.fetchTVshow} posterLarge />
    </>
  );
}

export default TVshows;
