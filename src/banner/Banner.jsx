import React, { useState, useEffect } from "react";
import "./banner.css";
import requestUrls from "../requests";
import axios from "../axios";
import movieTrailer from "movie-trailer";
import Popup from "../popup/Popup";
import Viewer from "../viewer";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [popup, setPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);

      console.log(movie);
      return request;
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const prevSlide = () => {
    const isFirstIndex = currentIndex === 0;
    setAnimation(false); // Reset animation
    setTimeout(() => {
      const newIndex = isFirstIndex ? movie.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setAnimation(true); // Reapply animation
    }, 50);
  };
  const nextSlide = () => {
    const isFirstIndex = currentIndex === movie.length - 1;
    setAnimation(false); // Reset animation
    setTimeout(() => {
      const newIndex = isFirstIndex ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setAnimation(true); // Reapply animation
    }, 50);
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie.origional_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          urlParams ? setTrailerUrl(urlParams.get("v")) : null;
        })
        .catch((error) => {
          console.log(error);
          setPopup(true);
        });
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <header
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie[currentIndex]?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
        className="carousel-slide"
      >
        <div className="hero-section">
          <div className="hero-content">
            <h1 className={`${animation ? "animate-text" : ""}`}>
              {movie[currentIndex]?.title ||
                movie[currentIndex]?.name ||
                movie[currentIndex]?.original_name}
            </h1>
            <div className="buttons">
              <button
                onClick={() => handleClick(movie[currentIndex])}
                className="play-btn"
              >
                Play
              </button>
              <button className="mylist-btn">My List</button>
            </div>
            <p className={`${animation ? "animate-text" : ""}`}>
              {truncate(movie[currentIndex]?.overview, 150)}
            </p>
          </div>
          {/* Left arrow */}
          <div className="left-arrow">
            <BsChevronCompactLeft size={40} onClick={prevSlide} />
          </div>

          {/* Right arrow */}
          <div className="right-arrow">
            <BsChevronCompactRight size={40} onClick={nextSlide} />
          </div>
        </div>
        {/* <div className="banner__fadeBottom"></div> */}
      </header>
      <div>
        {trailerUrl && (
          <Viewer
            videoId={trailerUrl}
            opts={opts}
            onClose={() => setTrailerUrl("")}
          />
        )}
        {popup && <Popup onClose={() => setPopup(false)} />}
      </div>
    </>
  );
}

export default Banner;
