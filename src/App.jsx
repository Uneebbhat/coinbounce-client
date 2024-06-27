import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import SignupPage from "@/pages/Signup/SignupPage.jsx";
import Container from "@/components/Container";
import LoginPage from "@/pages/Login/LoginPage.jsx";
import NotFound from "@/pages/NotFound.jsx";
import Crypto from "@/pages/Crypto/Crypto";

function App() {
  return (
    <>
      <Router>
        <Container>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
