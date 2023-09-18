import { Link } from 'react-router-dom'
import { Nav, Navbar, Container } from 'react-bootstrap'
// import '../App.css'

export default function Navegador() {
  return(
    <>
      <Navbar className='navegador-color' expand='lg'>
        <Container className='justify-content-start'>
          <Nav className='me-auto' defaultActiveKey='/home' variant='pills'>
            <Link to='/' className='text-white ms-3 text-decoration-none'>
              <span className='imagen-nav'>🏠</span> Home
            </Link>
            <Link to='/contacto' className='text-white ms-3 text-decoration-none'>
              <span className='imagen-nav'>📒</span> Contacto
            </Link>
          </Nav>
            
          <Navbar.Brand className='text-white'>
            <Link to='/' className='text-white ms-3 text-decoration-none'>Happy Cake <span>🍰</span></Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}