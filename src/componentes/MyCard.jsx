import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample({Title, Text, Foto}) {
  return (
    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src={Foto}/>
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
        {Text}
        </Card.Text>
        <Button variant="primary">Galería</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;


