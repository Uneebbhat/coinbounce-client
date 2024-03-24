import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/ui/Navbar";
import Container from "./components/ui/Container";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CreateBlogPage from "./pages/CreateBlogPage";
import BlogsPage from "./pages/BlogsPage";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <>
      <Container>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/create-blog" element={<CreateBlogPage />} />
            </Route>
            <Route path="/blogs" element={<BlogsPage />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
