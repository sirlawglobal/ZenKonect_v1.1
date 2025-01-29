
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginApp from "./components/";
import Home from "../Helper/Home";
import CreateAccount from "../Views/CreateAccount";
import AddPicture from "./AddPicture";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginApp />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/Addpicture" element={<AddPicture />} />
      </Routes>
    </Router>
  );
}

export default App;
