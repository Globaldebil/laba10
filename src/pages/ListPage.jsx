import React, { useState, useEffect } from 'react';

import MovieList from '../components/MovieList';
import MovieDetail from '../components/MovieDetail';
import SearchBar from '../components/SearchBar';
import { fetchRandomMovies, fetchSelectedMovie } from '../helpers';

import styles from '../App.module.css';

const ListPage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingDetail, setLoadingDetail] = useState(false);

  useEffect(() => {
    fetchRandomMovies(setLoading, setMovies);
  }, []);
  
  const filteredMovies = movies.length && movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div >
        <h1>Movie List</h1>
        <div className={styles.searchBarContainer}>
          <SearchBar onSearch={setSearchTerm} />
        </div>
        <div className={styles.movieListContainer}>
          {loading ? (
            <div className={styles.skeletonContainer}>
              {[...Array(5)].map((_, idx) => (
                <div key={idx} className={styles.skeleton}></div>
              ))}
            </div>
          ) : (
            <MovieList movies={filteredMovies} onSelectMovie={fetchSelectedMovie} setSelectedMovie={setSelectedMovie} setLoadingDetail={setLoadingDetail}/>
          )}
        </div>
      </div>

      <div className={styles.movieDetailContainer}>
        {loadingDetail ? (
          <div className={styles.skeleton}></div>
        ) : (
          selectedMovie && <MovieDetail movie={selectedMovie} setLoading={setLoading} setMovies={setMovies} setSelectedMovie={setSelectedMovie}/>
        )}
      </div>
      </>
  );
};

export default ListPage;
