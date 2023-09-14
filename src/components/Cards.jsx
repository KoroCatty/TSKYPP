import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

// UI card data
const UIs = [
  {
    id: 1,
    name: "Modal UI 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Modal UI 2",
    image: "https://via.placeholder.com/350",
  },
  {
    id: 3,
    name: "Modal UI 3",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "Modal UI 4",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 5,
    name: "Modal UI 5",
    image: "https://via.placeholder.com/200",
  },
];

const Cards = () => {
  return (
    <Container>
      <Row className="ui">
      <h1 className="title">UI COMPONENTS</h1>
        {UIs.map((item) => {
          return (
            <Col key={item.id} sm={12} md={6} lg={4} xl={3} className="ui__card">
              <Card className="my-3 p-3 rounded ">
                <Link to={`/ui/${item.id}`} className="ui__link">
                  <Card.Img
                    src={item.image}
                    variant="top"
                    style={{ height: "200px" }}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title as="div" className="product-card_title">
                      <strong>{item.name}</strong>
                    </Card.Title>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Cards;
