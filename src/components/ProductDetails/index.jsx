import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import star from "../../assets/star-rating.png";
import "./index.css";
import { useParams } from "react-router";

function ProductDetails({
  products,
  favourites,
  setFavourites,
  cart,
  setCart,
}) {
  const { id } = useParams();

  const product = products.find((p) => p.id == id);

  if (!product) {
    return <p className="lead">Product not found</p>;
  }

  return (
    <div>
      <Card className="d-flex flex-column flex-md-row">
        <Card.Img
          variant="top"
          src={product.images[0]}
          className="product-detail-img"
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.rating}{" "}
              {[...new Array(Math.round(product.rating))].map((s, index) => (
                <img src={star} width={12} key={index} />
              ))}{" "}
              ({product.reviews.length})
            </Card.Text>
            <Card.Text>
              <span className="fs-2">${product.price}</span> (
              {Math.round(product.discountPercentage)}% discount)
            </Card.Text>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text className="badge text-bg-secondary">
              {product.warrantyInformation}
            </Card.Text>
            <Card.Text>
              {product.shippingInformation} | {product.returnPolicy}
            </Card.Text>
          </div>
          <div className="col-12 col-lg-6">
            <Button
              variant="primary"
              className="w-100"
              onClick={() => setFavourites([...favourites, product.id])}
              disabled={favourites.includes(product.id)}
            >
              {favourites.includes(product.id)
                ? "Added to favourites"
                : "Add to favourites"}
            </Button>
          </div>
          <Button
            variant="primary"
            className="add-to-cart-btn mt-2 mb-2"
            onClick={() => setCart([...cart, product.id])}
            disabled={cart.includes(product.id)}
          >
            {cart.includes(product.id) ? "Added to cart" : "Add to cart"}
          </Button>
          <ListGroup as="ol" className="mt-3">
            <p className="fw-semibold mb-1">
              Reviews and ratings ({product.reviews.length})
            </p>
            {product.reviews.map((pr, index) => (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
                key={index}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{pr.reviewerName}</div>
                  {pr.comment}
                </div>

                <div>
                  {[...new Array(Math.round(pr.rating))].map((s, index) => (
                    <img src={star} width={12} key={index} alt="star" />
                  ))}
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductDetails;
