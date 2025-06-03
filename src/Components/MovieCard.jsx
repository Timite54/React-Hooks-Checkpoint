import React from "react";

function MovieCard({ movie }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
      <h2>{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} width="150" />
      <p>{movie.description}</p>
      <p>Note : {movie.rating}</p>
    </div>
  );
}

export default MovieCard;