import CarDetails from "./components/CarDetails/Cardetails";
import CarListingPage from "./components/CarListing/CarListingPage";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardetails/:model" element={<CarDetails />} />
          <Route path="/carlisting" element={<CarListingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
