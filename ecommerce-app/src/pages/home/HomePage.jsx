import { useEffect, useState } from "react";
import "./HomPage.css";
import { Header } from "../../components/Header";
import axios from "axios";
import { ProductsGrid } from "./ProductsGrid";

export const HomePage = ({ cartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      //  Using Fetch for Retrieving data from the BackEnd (Products)
      const response = await axios.get("/api/products");
      setProducts(response.data);
      //  Fetch Retrieving data from the Backend for (Carts-Items)
    };

    getHomeData();
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
