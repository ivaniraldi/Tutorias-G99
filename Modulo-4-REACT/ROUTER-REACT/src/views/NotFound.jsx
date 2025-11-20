import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  return (
    <>
      <Alert show={show} variant="warning">
        <Alert.Heading>Error 404 :(</Alert.Heading>
        <p>Parece que esta página no existe.</p>
        <hr />
        <div className="d-flex justify-content-end">
            <Button variant="outline-warning" onClick={()=> navigate("/home")}>Volver al Inicio</Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

export default NotFound;
