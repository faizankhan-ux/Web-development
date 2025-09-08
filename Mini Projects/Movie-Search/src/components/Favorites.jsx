import React from 'react'
import '../App.css'
import MovieCard from './MovieCard'

const Favorites = ({ list, setFavorites }) => {
  
  function ClearFavorites() {
    localStorage.removeItem("favorites");
    setFavorites([]); // reset state so UI updates immediately
  }

  return (
    <div className="min-h-screen w-full text-white font-bold flex flex-col items-center relative p-6">
      
      {list.length === 0 ? (
        <>
          <h2 className="text-2xl mb-2">No Favorite Movies Yet</h2>
          <p className="text-gray-300">
            Start adding movies to your favorites and they will appear here...
          </p>
        </>
      ) : (
        <>
          <button
            onClick={ClearFavorites}
            className="mb-6 h-10 w-28 bg-cyan-400 rounded-2xl cursor-pointer hover:bg-cyan-600 hover:font-semibold text-black self-end"
          >
            Clear All
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full p-5">
            {list.map((movie, index) => (
              <MovieCard
                key={index}
                title={movie.title || movie.Title}
                year={movie.year || movie.Year}
                poster={movie.poster || movie.Poster}
                type={movie.type || movie.Type}
                className="movie-card"
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Favorites
