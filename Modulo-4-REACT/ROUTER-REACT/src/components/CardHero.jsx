import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function CardHero() {

  const navigate = useNavigate()
  const token = true
  
  const handleClick = () =>{
    if(token){
      navigate("/about")
    }else{
      navigate("/")
    }
  }

  return (
    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary" onClick={()=> navigate("/about")}>Ir al about</Button>

        <button onClick={handleClick}>Ir al about pero con una función</button>


      </Card.Body>
    </Card>
  );
}

export default CardHero;