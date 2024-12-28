import { Card, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../feature/cart/cartSlice";

export default function CartItem({ item }) {
    const dispatch = useDispatch();

    function removeItem() {
        dispatch(removeFromCart(item)); // Dispatch remove action
    }

    return (
        <Card className="mb-2">
            <Card.Body>
                <Row>
                    <Col xs={4} md={2}>
                        <Card.Img
                            variant="top"
                            src={`https://picsum.photos/id/${item.id}/200`}
                            alt={item.name}
                        />
                    </Col>
                    <Col xs={8} md={6}>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <p>Price: RM{item.price.substring(2)}</p>
                        <p>Quantity: {item.amount}</p>
                        <Button variant="danger" onClick={removeItem}>
                            Remove 1
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}
