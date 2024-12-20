import React from 'react';

import styles from '../styles/MovieList.module.css';

const MovieList = ({ movies, onSelectMovie , setSelectedMovie}) => {

  return (
    <ul className={styles.movieList}>
      {movies.length &&  movies.map((movie) => (
          <li 
            key={movie._id} 
            className={styles.movieItem}
            onClick={() => onSelectMovie(movie, setSelectedMovie)}
            >
            <img
              src={movie.poster !== 'N/A' ? movie.poster : 'https://via.placeholder.com/200x300'}
              alt={movie.title}
              className={styles.moviePoster}
            />
            <h3 className={styles.movieTitle}>{movie.title}</h3>
            <p className={styles.movieYear}>{movie.year}</p>
          </li>
        ))}
    </ul>
  );
};

export default MovieList;