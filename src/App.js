import './App.css';
import { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import FormSearch from './components/FormSearch';
const API_OMDB_URL = 'http://www.omdbapi.com?apikey=b582542b';

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_OMDB_URL}&s=${title}`)
      const data = await response.json()
      setMovies(data.Search)
    } catch (error) {
      console.log(error)
    }
  }

  const getMovie = async (title) => {
    try {
      const response = await fetch(`${API_OMDB_URL}&s=${title}`)
      const data = await response.json()
      setMovies(data.Search)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    searchMovies('superman')
  }, []);

  return (
    <div className='app'>
      <FormSearch getMovie={getMovie} />

      {
        movies.length > 0
          ? (<div className='container'>
            {movies.map((movie) => <MovieCard key={movie.Title} movie={movie} />)}
          </div>
          )
          : (
            <div className='empty'>
              <h2>No movies found.</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;
