import React, { useState } from 'react';
import styles from '../styles/MovieForm.module.css'; // Импортируем стили из модуля

const MovieForm = () => {
  const [movieData, setMovieData] = useState({
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    awards: "7 wins & 19 nominations",
    boxOffice: "$775,398,000",
    country: "United States",
    director: "George Lucas",
    dvd: "Yes",
    genre: "Action, Adventure, Fantasy",
    imdbID: "tt0076759",
    imdbRating: "8.6",
    imdbVotes: "1,071,951",
    language: "English",
    metascore: "90",
    plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, Chewbacca, and a princess to rescue the galaxy from the Empire's world-destroying battle station, while also attempting to rescue his Princess and uncover the truth about his parentage.",
    poster: "https://d1fmeh97wdzeno.cloudfront.net/495E2FCA-D3F6-6B4A-BE97-3B92A244463C_1200.jpg",
    production: "Lucasfilm",
    rated: "PG",
    ratings: [
      {
        source: "Rotten Tomatoes",
        value: "93%"
      },
      {
        source: "IMDb",
        value: "8.6/10"
      }
    ],
    released: "25 May 1977",
    response: "True",
    runtime: "121 min",
    title: "Star Wars: Episode IV - A New Hope",
    type: "movie",
    website: "https://www.starwars.com",
    writer: "George Lucas",
    year: "1977"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieData),
      });

      if (response.ok) {
        alert('Movie added successfully!');
      } else {
        alert('Failed to add movie.');
      }
    } catch (error) {
      alert('Error occurred while adding movie.');
    }
  };

  return (
    <div className={styles['form-container']}>
      <form onSubmit={handleSubmit} className={styles['movie-form']}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={movieData.title}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          Genre:
          <input
            type="text"
            name="genre"
            value={movieData.genre}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          Director:
          <input
            type="text"
            name="director"
            value={movieData.director}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          Actors:
          <input
            type="text"
            name="actors"
            value={movieData.actors}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          Awards:
          <input
            type="text"
            name="awards"
            value={movieData.awards}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          Box Office:
          <input
            type="text"
            name="boxOffice"
            value={movieData.boxOffice}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={movieData.country}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          DVD:
          <input
            type="text"
            name="dvd"
            value={movieData.dvd}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          IMDb ID:
          <input
            type="text"
            name="imdbID"
            value={movieData.imdbID}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          IMDb Rating:
          <input
            type="text"
            name="imdbRating"
            value={movieData.imdbRating}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          IMDb Votes:
          <input
            type="text"
            name="imdbVotes"
            value={movieData.imdbVotes}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          Language:
          <input
            type="text"
            name="language"
            value={movieData.language}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          Metascore:
          <input
            type="text"
            name="metascore"
            value={movieData.metascore}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          Plot:
          <textarea
            name="plot"
            value={movieData.plot}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          Poster URL:
          <input
            type="text"
            name="poster"
            value={movieData.poster}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          Production:
          <input
            type="text"
            name="production"
            value={movieData.production}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          Rated:
          <input
            type="text"
            name="rated"
            value={movieData.rated}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          Ratings:
          <textarea
            name="ratings"
            value={movieData.ratings}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          Released:
          <input
            type="text"
            name="released"
            value={movieData.released}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          Response:
          <input
            type="text"
            name="response"
            value={movieData.response}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          Runtime:
          <input
            type="text"
            name="runtime"
            value={movieData.runtime}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={movieData.type}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          Website:
          <input
            type="text"
            name="website"
            value={movieData.website}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          Writer:
          <input
            type="text"
            name="writer"
            value={movieData.writer}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <label>
          Year:
          <input
            type="text"
            name="year"
            value={movieData.year}
            onChange={handleChange}
            required
            className={styles['input-field']}
          />
        </label>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default MovieForm;
