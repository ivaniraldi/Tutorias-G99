import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='d-flex justify-content-center'>
        <Navbar.Brand className="text-center" href="#">G99 - Renderización Dinámica</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;