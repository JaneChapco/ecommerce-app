import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import {
  AppNavbar,
  Landing,
  Products,
  ProductDetails,
  Cart,
  Favourites,
  Payment,
  Account,
} from "./components";
import { Container } from "react-bootstrap";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=200");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <AppNavbar cart={cart} favourites={favourites} />
      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/products"
            element={
              <Products
                products={products}
                favourites={favourites}
                setFavourites={setFavourites}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/product-details/:id"
            element={
              <ProductDetails
                products={products}
                favourites={favourites}
                setFavourites={setFavourites}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart products={products} cart={cart} setCart={setCart} />}
          />
          <Route
            path="/favourites"
            element={
              <Favourites
                products={products}
                favourites={favourites}
                setFavourites={setFavourites}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route path="/payment" element={<Payment />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
