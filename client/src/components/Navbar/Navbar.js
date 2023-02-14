import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'


function NavBar() {
  return (
    <Navbar  bg="dark" variant="dark">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand href="#home">X-Ray Database</Navbar.Brand>
        </LinkContainer>
          <Nav
            className="me-auto my-2 my-lg-0">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin">
              <Nav.Link>Admin</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/newx-ray">
              <Nav.Link>Create New X-Ray</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search X-Rays"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;