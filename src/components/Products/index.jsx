import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import star from "../../assets/star-rating.png";
import "./index.css";
import { Link } from "react-router";

function Products({ products, favourites, setFavourites, cart, setCart }) {
  const kitchenProducts = products.filter((product) =>
    ["kitchen-accessories"].includes(product.category),
  );

  return (
    <div>
      <h3>Kitchen Essentials</h3>
      <p>Practical tools and accessories for today's modern chef.</p>

      {kitchenProducts.map((product) => (
        <Card
          className="d-flex flex-column flex-md-row mt-1 mb-2"
          key={product.id}
        >
          <Card.Img
            variant="top"
            src={product.thumbnail}
            className="product-img"
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <div>
              <Card.Title>
                <h3>{product.title}</h3>
              </Card.Title>
              <Card.Text>
                <span className="fs-2">${product.price}</span> (
                {Math.round(product.discountPercentage)}% discount)
              </Card.Text>
              <Card.Text>
                {product.rating}{" "}
                {[...new Array(Math.round(product.rating))].map((s, index) => (
                  <img src={star} width={12} key={index} />
                ))}{" "}
                ({product.reviews.length})
              </Card.Text>
            </div>
            <div className="row g-2">
              <div className="col-12 col-lg-4">
                <Link
                  to={`/product-details/${product.id}`}
                  variant=""
                  className="action-btn btn-details w-100 mt-2"
                >
                  View details
                </Link>
              </div>

              <div className="col-12 col-lg-4">
                <Button
                  className="action-btn btn-favourite w-100 mt-2"
                  onClick={() => setFavourites([...favourites, product.id])}
                  disabled={favourites.includes(product.id)}
                >
                  {favourites.includes(product.id)
                    ? "Added to favourites"
                    : "Add to favourites"}
                </Button>
              </div>

              <div className="col-12 col-lg-4">
                <Button
                  className="action-btn btn-products w-100 mt-2"
                  onClick={() => setCart([...cart, product.id])}
                  disabled={cart.includes(product.id)}
                >
                  {cart.includes(product.id) ? "Added to cart" : "Add to cart"}
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Products;
