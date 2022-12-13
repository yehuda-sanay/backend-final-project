import Card from 'react-bootstrap/Card';

function DayCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>The most profitable day</Card.Title>
        <Card.Text>
         <h1>Thursday</h1>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DayCard;