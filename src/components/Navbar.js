import { useHistory ,Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = ({ searchText, setSearchText }) => {

  const history = useHistory();

  const updateSearchText = (e) => {
    setSearchText(e.target.value);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault(); 
    // Redirect to the search results page or trigger your search logic here
    history.push(`/search?query=${encodeURIComponent(searchText)}`);
  };

    return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Movie Browser</Link>
          <button className="navbar-toggler" type="button"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
  
              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="goingsomewhere" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown 
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="goingsomewhere">Action</Link></li>
                  <li><Link className="dropdown-item" to="goingsomewhere">Another action</Link></li>
                  <li><hr className="dropdown-divider"/></li>   
                  <li><Link className="dropdown-item" to="goingsomewhere">Something else here</Link></li>
                </ul>
              </li> */}
              // DROP DOWN LIST - OPTIONAL
  
              <li className="nav-item">
                <Link className="nav-link active" aria-disabled="true" to="/color">Coming soon</Link>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
              <input className="form-control me-2" type="search" placeholder="Search Movies Here" aria-label="Search" value={searchText} onChange={updateSearchText}/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }

  export default Navbar;
