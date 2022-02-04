import "./App.css";
import Main from "./components/MainComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Price from "./components/PriceComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/price" element={<Price />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
