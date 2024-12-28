import { Container, Row, Col } from "react-bootstrap";
import Item from "../components/Item";

const items = [
    { id: 1, name: "Pen", description: "It's a pen", price: "RM10" },
    { id: 2, name: "Laptop", description: "I think it's a laptop", price: "RM1200" },
    { id: 3, name: "Mouse", description: "It's a mouse", price: "RM20" },
    { id: 4, name: "Keyboard", description: "Mechanical keyboard", price: "RM150" },
    { id: 5, name: "Headphones", description: "Wireless headphones", price: "RM250" },
    { id: 6, name: "Smartphone", description: "Android smartphone", price: "RM899" },
    { id: 7, name: "Tablet", description: "10-inch tablet", price: "RM499" },
    { id: 8, name: "Smartwatch", description: "Wearable smartwatch", price: "RM299" },
    { id: 9, name: "Charger", description: "Fast charger", price: "RM50" },
    { id: 10, name: "Backpack", description: "Laptop backpack", price: "RM120" }
];

export default function Home() {
  return (
    <Container>
        <Row>
            {items.map((item) => (
                <Col key={item.id} md={3} className="mb-4">
                    <Item item={item} />
                </Col>
            ))}
        </Row>
    </Container>
  );
}
