import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

// si bien no se pedía en el desafío, decidí hacer una válidación mínima (correo)
// para reforzar los conocimientos adquiridos con anterioridad
import { useState } from 'react'

const Contacto = () => {
  // declaración de estados para manejar los distintos elementos a usar en Contacto
  const [correo, setCorreo] = useState('')
  const [texto, setTexto] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [estilo, setEstilo] = useState('')

  // estado para manejar ausencia del correo
  const [error, setError] = useState(false)

  // función para validar el correo ingresado al formulario
  const validarDatos = (e) => {
    e.preventDefault()

    if(correo == '' && texto == '') {
      setError(true)
      setEstilo('bg-danger text-white')
      setMensaje('Está intentando enviar información en blanco, por favor, llene todos los campos')
      return
    } else if (correo == '') {
      setError(true)
      setEstilo('bg-danger text-white')
      setMensaje('El campo Correo es obligatorio')
      return 
    } else if (texto == '') {
      setError(true)
      setEstilo('bg-warning text-primary')
      setMensaje('El área de texto está vacía, por favor, escriba lo que necesite')
      return
    }

    // se borran los campos luego de oprimir el botón Enviar
    setError(false)
    setCorreo('')
    setTexto('') 
    setMensaje('')
    setEstilo('')
    modal()
  }

  const modal = () => {
    alert('Datos enviados satisfactoriamente')
  }


  return(
    <>
      <Container>
        <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>
        <Form className='mt-5' onSubmit={validarDatos}>
          
          <Form.Group className="mb-3">
            <Form.Label>Correo</Form.Label>
            <Form.Control 
              type="email"
              placeholder="nombre@ejemplo.com"
              onChange={(e) => setCorreo(e.target.value)}
              value={correo} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción</Form.Label>
            <Form.Control 
              as="textarea"
              rows={3}
              placeholder='Escriba lo que necesite aquí'
              onChange={(e)=>setTexto(e.target.value)}
              value={texto}
            />
          </Form.Group>

          {/* Mensaje de advertancia sencillo */}
          {error ? <p className={estilo}>{mensaje}</p> : null}

          <Button type='submit' className='navegador-color my-5'>
            Enviar
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default Contacto;