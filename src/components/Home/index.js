import { Container, Navbar, Nav } from 'react-bootstrap';

const Home = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="me-auto ">
          <Nav.Link href="/todos">Todos</Nav.Link>
          <Nav.Link href="/photos">Photos</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Home;
