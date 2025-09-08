import React from 'react'
import MovieCard from './MovieCard'
import Loader from './Loader'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP , ScrollTrigger);

const MovieGrid = ({ Movies, loading, AddFavorites }) => {
  useGSAP(() => {
  gsap.utils.toArray(".movie-card").forEach((card) => {
    gsap.from(card, {
      x: 100,
      opacity: 0,
      filter: "blur(10px)",
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        scroller: "body",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "play none none reverse",
        markers: true, // remove later
      },
    });
  });
}, [Movies]);


  return (
    <div className='bg-[#222831] min-h-[80vh] w-[90%] mx-auto py-10 relative'>
      {loading && <Loader />}

      {!loading && (
        <>
          {Movies && Movies.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center'>
              {Movies.map((movie, index) => (
                <MovieCard
                  key={movie.imdbID || index}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  type={movie.Type}
                  AddFavorites={AddFavorites}
                  className="movie-card"
                />
              ))}
            </div>
          ) : (
            <div className='flex items-center justify-center h-64'>
              <p className='text-white text-xl text-center'>
                {Movies && Movies.length === 0
                  ? "No movies found. Try searching for something else!"
                  : "Search for movies to see results here!"}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default MovieGrid
