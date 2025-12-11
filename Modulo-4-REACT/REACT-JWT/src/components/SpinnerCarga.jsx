import Spinner from 'react-bootstrap/Spinner';

function SpinnerCarga() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Cargando...</span>
    </Spinner>
  );
}

export default SpinnerCarga;