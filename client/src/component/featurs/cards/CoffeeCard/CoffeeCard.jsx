import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CoffeeCard({allCoffeeProfit,allCoffeOrderInEndOfLength}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="coffee.JPG" />
      <Card.Body>
        <Card.Title><h2>Coffee</h2></Card.Title>
        <Card.Text>
          <h4>Profit:  {allCoffeeProfit}$</h4>
          <h4>Oredrs:  {allCoffeOrderInEndOfLength}</h4>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CoffeeCard;