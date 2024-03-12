import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/ui/Navbar";
import Container from "./components/ui/Container";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <>
      <Container>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
