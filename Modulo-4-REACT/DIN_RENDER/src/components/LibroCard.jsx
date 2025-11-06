import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function LibroCard(props) {
    let libro = props.libro
  return (
    <Card>
      <Card.Body>
        <Card.Title>{libro.nombre}</Card.Title>
        <Card.Text>
          Stock: {libro.stock}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>${libro.precio}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Text href="#">{libro.categorias.map((c, i)=>{
            return(
                <span key={i} className='me-2'>{c}</span>
            )
        })}</Card.Text>
        <Card.Link href="#">{libro.disponibilidad}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default LibroCard;