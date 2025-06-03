import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import AddMovie from "./Components/AddMovie";
import "./App.css";

const initialMovies = [
  {
    title: "Inception",
    description: "Un film de science-fiction.",
    posterURL: "https://m.media-amazon.com/images/I/51s+z8w+HnL._AC_SY679_.jpg",
    rating: 5,
  },
  {
    title: "Titanic",
    description: "Une histoire d'amour sur un bateau.",
    posterURL: "https://m.media-amazon.com/images/I/71rNJQ2g-EL._AC_SY679_.jpg",
    rating: 4,
  },
  {
    title: "Interstellar",
    description: "Voyage à travers l'espace et le temps.",
    posterURL: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
    rating: 5,
  },
  {
    title: "Le Roi Lion",
    description: "Un classique de Disney.",
    posterURL: "https://m.media-amazon.com/images/I/81w+3k4U8PL._AC_SY679_.jpg",
    rating: 4,
  },
  {
    title: "Avengers: Endgame",
    description: "Les super-héros s'unissent pour sauver l'univers.",
    posterURL: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
    rating: 5,
  },
  {
    title: "La La Land",
    description: "Une romance musicale à Los Angeles.",
    posterURL: "https://m.media-amazon.com/images/I/81r+LN2y6eL._AC_SY679_.jpg",
    rating: 4,
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <div className="container">
      <h1 className="main-title">Ma liste de films</h1>
      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;