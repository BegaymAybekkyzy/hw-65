import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink className="navbar-brand fs-2" to="/">Static pages</NavLink>
        <Nav className="ms-auto">
          <NavLink to='/pages/home' className="nav-link">Home</NavLink>
          <NavLink to='/pages/about' className="nav-link">About</NavLink>
          <NavLink to='/pages/page-edit' className="nav-link">Admin</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;