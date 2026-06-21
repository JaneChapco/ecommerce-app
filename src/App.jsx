import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import {
  AppNavbar,
  Landing,
  Products,
  ProductDetails,
  Cart,
} from "./components";
import { Container } from "react-bootstrap";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  async function fetchProducts() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <AppNavbar cart={cart} />
      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/products"
            element={
              <Products products={products} cart={cart} setCart={setCart} />
            }
          />
          <Route
            path="/product-details/:id"
            element={
              <ProductDetails
                products={products}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart products={products} cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
