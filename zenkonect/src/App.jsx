import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginApp from "./components/Views/LoginApp";
import Home from "./components/Helper/Home";
import Header from "./components/Helper/Header";
import CreateAccount from "./components/Views/CreateAccount";
import Dashboard from "./components/Views/dashboard";
import AddPicture from "./AddPicture";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginApp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/Addpicture" element={<AddPicture />} />
      </Routes>
    </Router>
  );
}

export default App;
