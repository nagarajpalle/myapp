import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Products from "./components/products";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
       
          <Route path="monitor" element={<Products />} />
          <Route path="*" element={<div>somnething went wrong</div>} />
          <Route path="/" element={<div></div>}>
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
