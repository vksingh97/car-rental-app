import "./App.css";
import Main from "./components/MainComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Price from "./components/PriceComponent";
import UserDetailComponent from "./components/UserDetailComponent";
import OtpComponent from "./components/OtpComponent";
import SummaryComponent from "./components/SummaryComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/price" element={<Price />} />
        <Route path="/userDetail" element={<UserDetailComponent />} />
        <Route path="/verifyOtp" element={<OtpComponent />} />
        <Route path="/summary" element={<SummaryComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
