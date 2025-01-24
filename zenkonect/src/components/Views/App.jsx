import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Helper/Header";
import LoginApp from "../Views/LoginApp";
import Home from "../Helper/Home";
import CreateAccount from "../Views/CreateAccount";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginApp />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
