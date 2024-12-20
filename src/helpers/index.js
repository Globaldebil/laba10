export async function fetchSelectedMovie(movie, setSelectedMovie) {
    const response = await fetch(`/movies/${movie._id}`);
    const data = await response.json();
    if(data) {
      setSelectedMovie(data);
    }
}


export async function fetchRandomMovies(setLoading, setMovies) {
  setLoading(true);
      const response = await fetch(`/movies`);
      const data = await response.json();
      if(data) {
        setMovies(data);
      }
  setLoading(false);
}

export async function deleteMovie(movie, setLoading, setMovies) {
  try {
    const response = await fetch(`/movies/${movie._id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.statusText}`);
    }
    fetchRandomMovies(setLoading, setMovies)
  } catch (error) {
    console.error('Ошибка при удалении данных:', error);
  }}