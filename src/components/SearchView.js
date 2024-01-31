import Hero from "./Hero";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const MovieCard = ({movie}) => {
    
    const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : 'http://www.vintage-breitling.com/wp-content/uploads/2015/06/no-longer-available.jpg';

    const detailUrl = `/movies/${movie.id}`
    return(
        <div className="col-lg-3 col-md-3 col-2 my-4">
            <div className="card" style={{ width: '18em'}}>
                <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                    <div className="card-body">
                        <h5 className="card-title">{movie.original_title}</h5>
                        <Link to={detailUrl} className="btn btn-primary">Show details</Link>
                    </div>
            </div>
        </div>
    )
}

const SearchView = ({ keyword, searchResults }) => {
    
    const title = `You are searching for ${keyword}`;

    const resultsHtml = searchResults.map((obj, i) => { 
        return <MovieCard movie={obj} key={i} />           
    });

    const sadDogImageUrl = `https://cdn.dribbble.com/users/29245/screenshots/2480165/media/392ffcb86abdd6d9eb8f6c6c8ffe629f.jpg?resize=800x600&vertical=center`;
    
    return (
        <>
            <Hero text={title} />
            {resultsHtml &&
            <div className="container">
                <div className="row">
                    {resultsHtml}
                </div>
                {searchResults.length === 0 && (
                    <div className="row d-flex justify-content-center align-items-center position-relative">
                        <img
                            src={sadDogImageUrl}
                            alt="Sad Dog"
                            style={{ maxWidth: '50%', height: 'auto', marginBottom: '10px' }}
                        />
                        <p style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '40px', textAlign: 'center', color: 'black' }}>
                            Movie you're looking for not found
                        </p>
                        <p style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '20px', textAlign: 'center', color: 'black' }}>
                            No results found for {keyword}
                        </p>
                    </div>
                )};
            </div>
            
        }                                                                   
        </>
    );
};

export default SearchView;
