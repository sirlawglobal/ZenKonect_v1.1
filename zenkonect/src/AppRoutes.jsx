import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Views/Dashboard/Index";
import LoginForm from "./components/Views/LoginForm";
import Header from "./components/Helper/Header";
import Footer from "./components/Helper/Footer";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Zenkonect</h1>} />
          <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
