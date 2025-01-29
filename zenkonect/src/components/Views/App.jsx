import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Helper/Header"
import LoginApp from "../Views/LoginApp";
import Home from "../Helper/Home";
import Dashboard from "./Dashboard/Index";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginApp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;