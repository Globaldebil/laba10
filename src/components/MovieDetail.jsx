import React from 'react';

import DeleteButton from './DeleteButton';

import styles from '../styles/MovieDetails.module.css';
import { deleteMovie } from '../helpers';

const MovieDetails = ({ movie, setLoading, setMovies, setSelectedMovie }) => {

console.log('movie', movie)

  const  clearMovie = ()  => { 
    deleteMovie(movie, setLoading, setMovies)
    setSelectedMovie(null);
    alert('Movie has been deleted.')
  }

  return (
    <div className={styles.movieDetails}>
      <div className={styles.movieHeader}>
        <img
          src={movie.poster !== 'N/A' ? movie.poster : 'https://via.placeholder.com/300x450'}
          alt={movie.title}
          className={styles.moviePoster}
        />        <div className={styles.movieInfo}>
          <h2 className={styles.movieTitle}>{movie.title || 'N/A'}</h2>
          <p><strong>Released:</strong> {movie.released || 'N/A'}</p>
          <p><strong>Genre:</strong> {movie.genre || 'N/A'}</p>
          <p><strong>Director:</strong> {movie.director  || 'N/A'}</p>
          <p><strong>Writer:</strong> {movie.writer || 'N/A'}</p>
          <p><strong>Actors:</strong> {movie.actors || 'N/A'}</p>
          <p><strong>Language:</strong> {movie.language || 'N/A'}</p>
          <p><strong>Country:</strong> {movie.country || 'N/A'}</p>
          <p><strong>Runtime:</strong> {movie.runtime || 'N/A'}</p>
          <p><strong>Rated:</strong> {movie.rated || 'N/A'}</p>
          <DeleteButton onClick={() => clearMovie()} />
        </div>
      </div>
      
      <div className={styles.moviePlot}>
        <h3>Plot</h3>
        <p>{movie.plot || 'N/A'}</p>
      </div>

      <div className={styles.movieExtras || 'N/A'}>
        <p><strong>Awards:</strong> {movie.awards || 'N/A'}</p>
        <p><strong>Box Office:</strong> {movie.boxOffice || 'N/A'}</p>
        <p><strong>IMDB Rating:</strong> {movie.imdbRating || 'N/A'} ({movie.imdbVotes || 'N/A'} votes)</p>
      </div>
    </div>
  );
};

export default MovieDetails;
