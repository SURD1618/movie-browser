import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import { Route, Switch } from "react-router-dom";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import { useState, useEffect } from "react";
import ChangeColor from "./components/ChangeColor";
import NotFound from "./components/NotFound";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=36c2ab884dfcc4966187fec1be3fc44a&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          if (data.results.length === 0) {
            setSearchResults([]);                     // No movies found
          } else {
            setSearchResults(data.results);
          }
        })
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={AboutView} />
        <Route path="/search">     {/* TERTIARY OPERATOR */}
          {/* {searchResults.length === 0 ? ( <Hero text="No movies found" /> ) : ( <SearchView keyword={searchText} searchResults={searchResults} />)} */}
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
        <Route component={NotFound} />
        <Route path="/color" component={ChangeColor} />
      </Switch>
    </div>
  );
}

export default App;


// POSTER PATH URL
//https://image.tmdb.org/t/p/original//dhjyfcwEoW6jJ4Q7DpZTp6E58GA.jpg 