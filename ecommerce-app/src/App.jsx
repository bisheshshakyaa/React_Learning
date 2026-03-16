import { HomePage } from "./pages/HomePage";
import "./App.css";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="checkout" element={<div>Test Checkout Page</div>}/>
    </Routes>
  );
}

export default App;
