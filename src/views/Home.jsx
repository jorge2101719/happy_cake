import { Container } from "react-bootstrap";
import Home from '../components/Home'

export default () => {
  return(
    <Container className="text-center my-5">
      <h1>Bienvenido a <span className="fw-bold">Happy Cake</span></h1>
      <p>El lugar de los pasteles felices</p>
      <Home />
    </Container>
  )
}