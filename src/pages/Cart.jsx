import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import CartItem from "../components/CartItem";

export default function Cart() {
    const cart = useSelector((state) => state.cart);

    // Calculate total dynamically
    const total = cart.reduce(
        (total, item) => total + parseInt(item.price.substring(2)) * item.amount,
        0
    );

    return (
        <Container>
            <h2>Your Cart:</h2>
            {cart.map((item, index) => (
                <CartItem key={index} item={item} />
            ))}
            <h4 className="mt-4">Total: <strong>RM{total}</strong></h4>
        </Container>
    );
}
