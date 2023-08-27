import './App.css'
import { useEffect } from 'react';
import searchbar from "./searchbar.svg"

const API_URL = "http://www.omdbapi.com?apikey=232b3ad4"

const App = () => {

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.search);
  }
  useEffect(() => {
    searchMovie("superman");
  }, []);

  return (
    <div className='App'>
      <h1>MovieBase</h1>

      <div className='search'>
        <input
          placeholder='Search for movies'
          value="Superman"
          onChange={() => { }}
        />
        <img src={searchbar} alt="search" onClick={() => { }} />
      </div>
      <div className='container'>

      </div>
    </div>
  );
}

export default App;
