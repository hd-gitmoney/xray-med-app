import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">
            <img
              src="favicon2.png"
              width="38"
              height="33"
              className="d-inline-block align-top"
              alt="Hack Logo"
            />
            ⠀git money MD
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Exams</Nav.Link>
            <Nav.Link href="/newExam">Add New Exam</Nav.Link>
              <NavDropdown.Divider />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;