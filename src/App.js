 
import './App.css';
import Navigateur from './Navigation/Navigateur';
import MovieList from './MovieList/MovieList';
import {moviesData} from './Data.js';
import { useState } from 'react';
import AddMovie from './AddMovie/AddMovie';
import FilterMovie from './FilterMovie/FilterMovie';

function App() {
  const[movies, setMovies] = useState(moviesData)
  const[inputSearch,setinputSearch]=useState('')
  const[newRate,setnewRate]=useState(0)
  const add =(newMovie) =>{
    setMovies([...movies,newMovie])
  }
  console.log(inputSearch)
  return (
    <div className="App">
      <Navigateur/>
      <FilterMovie inputSearch={inputSearch}setinputSearch={setinputSearch} newRate={newRate} setnewRate={setnewRate}/>
      <AddMovie add={add}/>
      <MovieList movies={movies} inputSearch={inputSearch}/>
    </div>
  );
}

export default App;

