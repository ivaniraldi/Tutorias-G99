import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CardCuppon(props) {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" style={{height: "230px", objectFit:"cover"}} src={props.imagen}/>
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text className='text-secondary'>
          {props.desc}
        </Card.Text>
                <Card.Text className='text-secondary'>
          {props.loc}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item ><div className='precio'>${props.precio1} <span className='text-success h3'>${props.precio2}</span></div></ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardCuppon;