import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const Header = () => {
    return (
   //      <Navbar className="navbar navbar-expand-lg navbar-dark py-3">
   //      <div className="container">
   //         <Nav.Link as={Link} to="/about" className="navbar-brand text-dark">Fullpack</Nav.Link>
   //         <button 
   //            className="navbar-toggler second-button" 
   //            type="button"
   //            data-toggle="collapse"
   //            data-target="#navmenu"
   //            >
   //         <span className="navbar-toggler-icon"></span>
   //         </button>
   //         <div className="collapse navbar-collapse" id="navmenu">
   //            <ul className="navbar-nav">
   //               <li className="nav-item">
   //                   <Nav.Link as={Link} to="/about" className="text-dark">О проекте</Nav.Link>
   //               </li>
   //               <li className="nav-ites">
   //                   <Nav.Link as={Link} to="/categories" className="text-dark">Категории</Nav.Link>
   //               </li>
   //            </ul>
   //         </div>
   //      </div>
   //   </Navbar>
      <Navbar bg="none" expand="lg">
         <Container>
            <Navbar.Brand as={Link} to="/about">FullPack</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link as={Link} to="/about" className="text-dark">О проекте</Nav.Link>
                  <Nav.Link as={Link} to="/categories" className="text-dark">Категории</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
    )
}
export default Header