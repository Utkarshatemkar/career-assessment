import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/pages/Welcome";
import Login from "./components/pages/Login";
import RoleSelection from "./components/pages/RoleSelection";
import Register from "./components/pages/Register";
import Verification  from "./components/pages/Verification";
import SetPassword from "./components/pages/SetPassword";
import ResetSuccess from "./components/pages/ResetSuccess"
import ForgotPassword from "./components/pages/ForgotPassword";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  

  return (
    <><Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/roles" element={<RoleSelection/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/verification" element={<Verification />} />
<Route path="/setpassword" element={<SetPassword />} />
<Route path="/reset-success" element={<ResetSuccess />} />
<Route path="/forgotpass" element={<ForgotPassword/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
