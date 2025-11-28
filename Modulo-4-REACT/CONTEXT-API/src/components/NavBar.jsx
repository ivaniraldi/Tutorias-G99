import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ThemeToggler from './ThemeToggler';

function NavBar() {
  return (
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img
              alt=""
              src="https://fakestoreapi.com/icons/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top rounded me-2"
            />
            Tutoría de Context API
          </Navbar.Brand>
          <ThemeToggler/>
        </Container>
      </Navbar>
  );
}

export default NavBar;