import { useEffect, useState } from "react";
import "./HomPage.css";
import { Header } from "../../components/Header";
import axios from "axios";
import { ProductsGrid } from "./ProductsGrid";

export const HomePage = ({ cartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // ? Using Fetch for Retrieving data from the BackEnd (Products)
    axios
      .get("/api/products")
      //.then le chai waits for the response to finish
      .then((response) => {
        setProducts(response.data);
      });
    // ? Fetch Retrieving data from the Backend for (Carts-Items)
  }, []);

  return (
    <>
      <title>Home Page</title>

      <link rel="icon" type="image/svg+xml" href="/images/home-favicon.png" />

      <Header cartItems={cartItems} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
};
