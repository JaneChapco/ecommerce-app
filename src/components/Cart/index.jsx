import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import star from "../../assets/star-rating.png";
import "./index.css";
import { Link } from "react-router";

function Cart({ products, cart, setCart }) {
  const cartProducts = products.filter((p) => cart.includes(p.id));
  let totalAmount = 0;
  cartProducts.forEach((p) => {
    totalAmount += p.price;
  });

  function handleRemoveItem(productId) {
    let updatedCart = cart.filter((id) => id != productId);
    setCart(updatedCart);
  }

  return (
    <div>
      {cartProducts.length === 0 ? (
        <div className="col-12 col-lg-6">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn btn-primary w-100">
            Start shopping
          </Link>
        </div>
      ) : (
        <>
          <h2>Your cart ({cartProducts.length} items)</h2>

          {cartProducts.map((product) => (
            <Card className="d-flex flex-row mt-2" key={product.id}>
              <Card.Img
                variant="top"
                src={product.thumbnail}
                className="product-img"
              />

              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{product.title}</Card.Title>

                  <Card.Text>
                    {product.rating}{" "}
                    {[...new Array(Math.round(product.rating))].map(
                      (s, index) => (
                        <img src={star} width={12} key={index} alt="star" />
                      ),
                    )}{" "}
                    ({product.reviews.length})
                  </Card.Text>

                  <Card.Text>
                    <span className="fs-2">${product.price}</span> (
                    {Math.round(product.discountPercentage)}% discount)
                  </Card.Text>

                  <Card.Text className="badge text-bg-secondary">
                    {product.warrantyInformation}
                  </Card.Text>

                  <Card.Text>
                    {product.shippingInformation} | {product.returnPolicy}
                  </Card.Text>
                </div>

                <Button
                  variant="danger"
                  className="add-to-cart-btn mt-2"
                  onClick={() => handleRemoveItem(product.id)}
                >
                  Remove from cart
                </Button>
              </Card.Body>
            </Card>
          ))}

          <Card className="mt-2 mb-2">
            <Card.Header>Summary</Card.Header>
            <Card.Body>
              <Card.Text className="fs-4">
                Total Amount:{" "}
                <span className="fw-semibold">${totalAmount.toFixed(2)}</span>
              </Card.Text>

              <div className="col-12 col-lg-6 mb-2">
                <Link to="/products" className="btn btn-primary w-100">
                  Continue shopping
                </Link>
              </div>

              <div className="col-12 col-lg-6 mb-2">
                <Link to="/payment" className="btn btn-primary w-100">
                  Proceed to payment
                </Link>
              </div>
            </Card.Body>
          </Card>
        </>
      )}
    </div>
  );
}

export default Cart;
