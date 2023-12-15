import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function myNavbar({ phoneList }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={'/'}>Home</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {phoneList.map(elm => {
              return (
                <Link to={`/phoneDetails/${elm.id}`} key={elm.id}>
                  {elm.name}
                </Link>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default myNavbar;