import React, { useState, useEffect } from "react";
import "./row.css";
import axios from "../axios";
import movieTrailer from "movie-trailer";
import Viewer from "../viewer";
import Popup from "../popup/Popup";

const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, posterLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        console.log(request.data);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "450",
    width: "100%",
    playVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie.origional_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
          setPopup(true);
        });
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies && movies.length > 0
          ? movies.map((movie) =>
              movie.backdrop_path !== null && movie.poster_path !== null ? (
                <img
                  key={movie.id}
                  className={`row__poster ${posterLarge && "row__posterLarge"}`}
                  src={`${baseUrl}${
                    posterLarge
                      ? movie.poster_path
                      : movie.backdrop_path || movie.poster_path
                  }`}
                  onClick={() => handleClick(movie)}
                  tooltip-text="Click here to see the trailer"
                />
              ) : null
            )
          : null}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && (
          <Viewer
            videoId={trailerUrl}
            opts={opts}
            onClose={() => setTrailerUrl("")}
          />
        )}
        {popup && <Popup onClose={() => setPopup(false)} />}
      </div>
    </div>
  );
}

export default Row;
