import "./App.css";
import Main from "./components/MainComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Price from "./components/PriceComponent";
import UserDetailComponent from "./components/UserDetailComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/price" element={<Price />} />
        <Route path="/userDetail" element={<UserDetailComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
