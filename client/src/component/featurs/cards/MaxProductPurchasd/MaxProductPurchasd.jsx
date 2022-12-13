import Card from 'react-bootstrap/Card';

function MaxProductPurchasd({props,item}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>The most profitable product</Card.Title>
        <Card.Text>
          <h1>Coffee</h1>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MaxProductPurchasd;