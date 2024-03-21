/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { MovieContext } from "../context";
import { getImageUrl } from "../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // using use context
  const { cartData, setCartData } = useContext(MovieContext);

  // handle modal close
  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  // handle open modal
  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  // handle add to cart movie
  const addToCartMovie = (e, movie) => {
    // stop propagation
    e.stopPropagation();
    // checking duplicate data is not adding.
    const found = cartData.find((item) => {
      return item.id === movie.id;
    });

    // checking has movie
    if (!found) {
      setCartData([...cartData, movie]);
    } else {
      console.error(`The movie ${movie.title} has been added to the cart`);
    }
  };
  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={selectedMovie} onClose={handleModalClose} />
      )}
      {/* or  */}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <button onClick={() => handleSelectMovie(movie)} href="">
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              onClick={(e) => addToCartMovie(e, movie)}
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to cart</span>
            </a>
          </figcaption>
        </button>
      </figure>
    </>
  );
};

export default MovieCard;
