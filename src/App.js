import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './Components/search.svg';
import MovieCard from './Components/Moviecard';


//  58c58a31

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=38c5bcd0'

// const movie1 = {
//   "Title": "Spiderman 2",
//   "Year": "2009",
//   "imdbID": "tt1433184",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
// }

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('Harry potter');

  }, []);


  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='search for Movies'
          value={searchTerm}
          onChange={(e) =>setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search' 
          onClick={() =>searchMovies(searchTerm)} 
          />
      </div>

      {
        movies?.length > 0 ?
          (<div className='container'>
            {movies.map((movie)=>(
              <MovieCard movie={movie}/>
            ))}
          </div>) :
          (
            <div className='empty'>
              <h2>No movies Found</h2></div>
          )
      }


    </div>
  );
}

export default App;