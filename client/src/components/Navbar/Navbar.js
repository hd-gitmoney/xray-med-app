import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import {useEffect, useState} from 'react';


function NavBar() {

  // const NavBar = () => {
  //   const [posts, setPosts] = useState([]); 
  //   useEffect(() => {
  //     async function fetchData() {
  //       const { data } = await fetch('/api/posts');
  //       setPosts(data.data.posts);
  //     }
  //     fetchData();
  //   }, []);
  // }
  // const searchPost = async (e) => {
  //   const searchValue = e.target.value;
  //   const { data } = await fetch(`/api/examRouter?search=${searchValue}`);
  //   // The subset of posts is added to the state that will trigger a re-render of the UI
  //   //setPosts(data.data.posts); 
  // };

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
              // onChange={searchPost}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Container>
    </Navbar>
    
  );
}  

// function handleTextSearch()
// {
//   const searchTerm = e.currentTarget.value;
//   axios.get("/exams").then((res) => {
//     if (res.data.success) {
//       this.filterContent(res.data.posts, searchTerm);
//     }
//   });
// }
// [{
//   $search: {
//    index: 'default',
//    text: {
//     query: '67',
//     path: 'AGE'
//    }
//   }
//  }, {
//   $project: {
//    AGE: 1,
//    ICU_Admit: 1,
//    LATESTWEIGHT: 1,
//    LATEST_BMI: 1,
//    MORTALITY: 1,
//    NUM_ICU_admits: 1,
//    PATIENT_ID: 1,
//    SEX: 1,
//    ZIP: 1,
//    exam_Id: 1
//   }
//  }]



export default NavBar;