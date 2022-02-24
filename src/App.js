
import "./Templates/Header.css";
import "./Templates/Footer.css";
import Header from "./Templates/Header";
import Overview from "./Components/Overview/Overview";
import Articles from "./Components/Articles/Articles";
import Map from "./Components/Map/Map";
import Footer from "./Templates/Footer";
import { Routes, Route } from "react-router-dom";
import Offer from "./Components/Offers/Offer";
import PhV from "./Components/Photo&video/PhV";
import Products from "./Components/Products/Products";
import Reviews from "./Components/Reviews/Reviews";
function App() {
  return <div className="App">
    <Header />

    <Routes>
      <Route path="/" exact element={<Overview />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/map" element={<Map />} />
      <Route path="/offer" element={<Offer />} />
      <Route path="/phv" element={<PhV />} />
      <Route path="/products" element={<Products />} />
      <Route path="/reviews" element={<Reviews />} />
    </Routes>
    <Footer />
  </div >;
}

export default App;
