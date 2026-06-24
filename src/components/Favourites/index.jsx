import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import star from "../../assets/star-rating.png";
import "./index.css";
import { Link } from "react-router";

function Favourites({ products, favourites, setFavourites, cart, setCart }) {
  const favouriteProducts = products.filter((p) => favourites.includes(p.id));

  function handleRemoveItem(productId) {
    let updatedFavourites = favourites.filter((id) => id != productId);
    setFavourites(updatedFavourites);
  }

  return (
    <div>
      {!favouriteProducts.length && (
        <>
          <div className="col-12 col-lg-6">
            <h2>Your favourites list is empty</h2>
            <Link to="/products" className="action-btn btn-products w-100 mt-2">
              Start shopping
            </Link>
          </div>
        </>
      )}

      {favouriteProducts.map((product) => (
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
                {[...new Array(Math.round(product.rating))].map((s, index) => (
                  <img src={star} width={12} key={index} />
                ))}{" "}
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
            <div className="col-12 col-lg-6">
              <Link
                to={`/product-details/${product.id}`}
                className="action-btn btn-details w-100 mt-2"
              >
                View details
              </Link>
            </div>
            <div className="col-12 col-lg-6">
              <Button
                className="action-btn btn-products w-100 mt-2"
                onClick={() => setCart([...cart, product.id])}
                disabled={cart.includes(product.id)}
              >
                {cart.includes(product.id) ? "Added to cart" : "Add to cart"}
              </Button>
            </div>
            <div className="col-12 col-lg-6">
              <Button
                variant="danger"
                className="action-btn btn-remove w-100 mt-2"
                onClick={() => handleRemoveItem(product.id)}
              >
                Remove from favourites
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Favourites;
