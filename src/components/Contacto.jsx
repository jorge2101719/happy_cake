import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

const Contacto = () => {
  return(
    <>
      <Container>
        <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="nombre@ejemplo.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button type='submit' className='navegador-color my-5'>
            Enviar
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default Contacto;