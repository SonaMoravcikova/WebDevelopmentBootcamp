import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Nabar';
import Home from './components/Home';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import NotFound from './components/NotFound';
import NoResults from './components/NoResult';



function App() {

  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState('');

  useEffect (() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then (data => {
        setSearchResults(data.results)
      })
      .catch(error =>{
        console.error('Error fetching search results:', error);
      });
    }
  }, [searchText])
  
 
  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route 
          path="/search" 
          element={
            searchResults.length > 0 ? (
               <SearchView keyword={searchText} searchResults = {searchResults} />
            ) : (
              <NoResults />
            )
          }
        />
        <Route path="/movies/:id" element={<MovieView/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
