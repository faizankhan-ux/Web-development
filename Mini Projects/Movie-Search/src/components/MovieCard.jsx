import React, { useRef } from 'react'
import '../App.css'

const MovieCard = ({ title, year, poster, type, AddFavorites, className }) => {
  let AddBtn = useRef();

  function HandelClick() {
    AddFavorites({ title, year, poster, type });
  }

  return (
    <div
      className={`movie-card h-72 w-50 text-white rounded-lg relative flex flex-col items-center justify-around border border-amber-300 overflow-hidden   ${className}`}
    >

      <i className="fa-brands fa-gratipay absolute  top-2 right-2 rounded-[100%] bg-red-600 cursor-pointer hover:scale-110 duration-300 z-3" onClick={HandelClick} ></i>

      {poster && poster !== 'N/A' ? (
        <img
          src={poster}
          alt={title}
          className="h-[75%] w-full object-cover shadow-[0px_0px_5px_black] hover:scale-110 duration-150 "
        />
      ) : (
        <div className="h-[75%] flex items-center justify-center">
          Poster not available
        </div>
      )}

      <h1 className="text-sm text-center truncate px-1 relative z-2">{title}</h1>
      <p className="text-xs">{year}</p>
      <p className="text-xs">{type}</p>
    </div>
  );
};

export default MovieCard;
