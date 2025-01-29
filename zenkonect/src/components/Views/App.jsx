import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginApp from "../Views/LoginApp";
import Dashboard from "../Views/Dashboard";
import Home from "../Helper/Home";
import Header from "../Helper/Header";
import Dashboard from "./Dashboard/Index";
import CreateAccount from "../Views/CreateAccount";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginApp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
