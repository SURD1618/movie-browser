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
//   const title = searchResults.length > 0 ? `You are searching for ${keyword}` : `No results found for for ${keyword}`;
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



// https://api.themoviedb.org/3/search/movie?query=star%20wars&include_adult=false&language=en-US&page=1'
//   API KEY = 36c2ab884dfcc4966187fec1be3fc44a
// EXAMPLE LINK= https://api.themoviedb.org/3/keyword/36c2ab884dfcc4966187fec1be3fc44a/movies?include_adult=false&language=en-US&page=1'



//NOTE 1
// The warning you're encountering, Warning: validateDOMNesting(...): 
// <li> cannot appear as a descendant of <li>., suggests an issue with the structure of your HTML elements. 
//     In your SearchView component, you are rendering a list item (<li>) directly inside another list item, which is not allowed in HTML.

// Let's correct the structure of your resultsHtml variable. 
// It seems like you want to display a list of movie titles. You should place the <li> elements 
//     directly inside an unordered or ordered list (<ul> or <ol>).
//   <div key={i}>{obj.original_title}</div>        
// <li key={obj.id}>{obj.original_title}</li>             //NOTE  




//NOTE 2
// If multiple movies have the same original_title, you could end up with duplicate keys. 
// To address this, consider using a unique identifier, such as the movie's ID from the API response
// By using the obj.id as the key, you ensure that each key is unique within the list. 
// Make sure that the property you choose as the key is unique for each item in the searchResults array.