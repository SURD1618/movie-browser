import Hero from "./Hero";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import GradientButton from 'react-linear-gradient-button';

const MovieView = () => {
    const { id } = useParams()
    console.log(id)

    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        console.log("Making an api request", id)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=36c2ab884dfcc4966187fec1be3fc44a&language=en-US%27`)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setMovieDetails(data)
                    setIsLoading(false)
                },2000) //just for testing Loading...
            })
    }, [id])

    function renderMovieDetails (){
        if(isLoading){
            return <Hero text="Loading..." />
        }
        if(movieDetails){

            const posterPath = `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`

            const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`

            const imdbUrl = `https://www.imdb.com/title/${movieDetails.imdb_id}/`

            
            return (
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={posterPath} alt="..." className="img-fluid shadow rounded"/>
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead">
                                    {movieDetails.overview}
                                </p>
                                {movieDetails.genres && (
                                    <div className="mb-3">
                                        <strong>Genres:</strong> {movieDetails.genres.map(genre => genre.name).join(', ')}
                                    </div>
                                )}
                                {movieDetails.imdb_id && (
                                    <div className="mb-3">
                                        <strong>IMDb Rating:</strong> {movieDetails.vote_average ? movieDetails.vote_average.toFixed(1) : 'N/A'}
                                    </div>
                                )}
                                {movieDetails.imdb_id && (
                                    <div className="mb-3">
                                        <a href={imdbUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                                        <GradientButton>
                                            <i className="fa-solid fa-film" ></i>{' '}
                                            Watch Trailer
                                        </GradientButton>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )

        }
    }
    return renderMovieDetails()
}

export default MovieView;


// BACKDROP_PATH = https://image.tmdb.org/t/p/original/rI8zOWkRQJdlAyQ6WJOSlYK6JxZ.jpg