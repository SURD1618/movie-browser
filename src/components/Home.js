import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);

  useEffect(() => {
    // Fetch featured or popular movies from the TMDB API
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1')
      .then(response => response.json())
      .then(data => setFeaturedMovies(data.results))
      .catch(error => console.error('Error fetching featured movies:', error));
  }, []);

  // Slick settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, 
    centerMode: true,
    centerPadding: '3%',                                                   // Adjust for spacing
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '10%',                                           // Adjust for smaller screens
        },
      },
    ],
  };

  return (
    <>
      <Hero text="Welcome to Movie Browser"/>

      <div className="container mt-5">
        <div className="top-picks">
          <div className="top-picks-line what-to-watch">What to watch</div>
          <div className="top-picks-line top-picks-heading">Top picks {'>'}</div>
          <div className="top-picks-line">TV shows and movies just for you</div>
        </div>

        <h2 className="text-center mb-4">Featured Movies</h2>
        <Slider {...sliderSettings} className="featured-slider">
          {featuredMovies.map(movie => (
            <div key={movie.id} className="featured-movie">
              <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} className="img-fluid" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Home;
