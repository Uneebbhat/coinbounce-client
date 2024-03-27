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
import BlogDetailPage from "./pages/BlogDetailPage";
import UpdateBlogPage from "./pages/UpdateBlogPage";

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
            <Route path="/blog/:blogId" element={<BlogDetailPage />} />
            <Route path="/edit-blog/:blogId" element={<UpdateBlogPage />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
