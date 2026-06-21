import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import star from '../../assets/star-rating.png'
import './index.css'
import { Link } from 'react-router'

function Products({ products, cart, setCart }) {
  return (
    <div>
      {products.map(product => (
        <Card className='d-flex flex-row mt-2' key={product.id}>
          <Card.Img variant="top" src={product.thumbnail} className='product-img' />
          <Card.Body className='d-flex flex-column justify-content-between'>
            <div>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.rating}
                {' '}
                {[...new Array(Math.round(product.rating))].map((s, index) => (
                  <img src={star} width={12} key={index} />
                ))}
                {' '}
                ({product.reviews.length})
              </Card.Text>
              <Card.Text>
                <span className='fs-2'>${product.price}</span>
                {' '}
                ({product.discountPercentage}% off)
              </Card.Text>
              <Card.Text className='badge text-bg-secondary'>{product.warrantyInformation}</Card.Text>
              <Card.Text>{product.shippingInformation} | {product.returnPolicy}</Card.Text>
            </div>
            <div>
              <Link to={`/product-details/${product.id}`} className='btn btn-primary add-to-cart-btn rounded-pill'>View details</Link>{' '}
              <Button 
                variant='warning' 
                className='add-to-cart-btn rounded-pill mt-2' 
                onClick={() => setCart([...cart, product.id])} 
                disabled={cart.includes(product.id)}
              >
                {cart.includes(product.id) ? 'Added to cart' : 'Add to cart'}
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Products;