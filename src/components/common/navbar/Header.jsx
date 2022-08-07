import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark py-3">
        <div className="container">
           <a href="#" className="navbar-brand text-dark">Fullpack</a>
           <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navmenu"
              >
           <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                 <li className="nav-item">
                     <Nav.Link as={Link} to="/about" className="text-dark">About</Nav.Link>
                 </li>
                 <li className="nav-ites">
                     <Nav.Link as={Link} to="/categories" className="text-dark">Categories</Nav.Link>
                 </li>
              </ul>
           </div>
        </div>
     </nav>
    )
}
export default Header