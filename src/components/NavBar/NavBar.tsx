import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { pageTitle } from "../../constants.ts";

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink className="navbar-brand fs-2" to="/">
          Static pages
        </NavLink>
        <Nav className="ms-auto">
          {pageTitle.map((title, index) => (
            <NavLink key={index} to={`/pages/${title.id}`} className="nav-link">
              {title.title}
            </NavLink>
          ))}
          <NavLink to="/pages/page-edit" className="nav-link">
            Admin
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
