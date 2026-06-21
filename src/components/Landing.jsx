import shoppingCartGif from '../assets/shopping-cart.gif'
import { Link } from "react-router"

function Landing(props) {
  return (
    <div className='text-center'>
      <h1 className='display-4'>Welcome to ShopEasy</h1>
      <hr />
      <p className='lead'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim iusto minima maxime quam similique vero mollitia, velit officia sequi impedit, voluptates facere nesciunt, obcaecati debitis corrupti recusandae officiis expedita beatae.</p>
      <img src={shoppingCartGif} width={300} /><br />
      <Link to="/products" className='btn btn-warning btn-lg'>See all products</Link>
    </div>
  );
}

export default Landing;