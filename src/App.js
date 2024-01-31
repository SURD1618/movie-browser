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
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          if (data.results.length === 0) {
            setSearchResults([]);                                                   // No movies found
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
        <Route path="/search">    
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


