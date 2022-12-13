
import Card from 'react-bootstrap/Card';

function TotalOrderedProductsCard({allCakeProfit,allCakeOrderInEndOfLength}) {

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="newCake.jpg"/>
        <Card.Body>
          <Card.Title><h2>Cake</h2></Card.Title>
          <Card.Text>
            <h4>Profit:  {allCakeProfit}$</h4>
            <h4>Oredrs:  {allCakeOrderInEndOfLength}</h4>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
 

export default TotalOrderedProductsCard;