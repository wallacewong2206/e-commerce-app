import { Card, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../feature/cart/cartSlice";

export default function CartItem({ item }) {
    const dispatch = useDispatch();

    function handleAdd() {
        dispatch(addToCart(item)); // Increase quantity
    }

    function handleRemove() {
        dispatch(removeFromCart(item)); // Decrease quantity
    }

    // Calculate subtotal for this item
    const itemSubtotal = parseInt(item.price.substring(2)) * item.amount;

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
                        <p><strong>Subtotal: RM{itemSubtotal}</strong></p>
                        <div className="d-flex align-items-center">
                            <Button variant="danger" onClick={handleRemove} className="me-2">
                                -
                            </Button>
                            <span>{item.amount}</span>
                            <Button variant="primary" onClick={handleAdd} className="ms-2">
                                +
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}
