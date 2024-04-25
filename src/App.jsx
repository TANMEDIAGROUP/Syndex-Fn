import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import Landing from "./views/Landing";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import NotFoundPage from "./views/404page";
import Reset from "./views/Reset"
import Verify from "./views/Verify";
import ResetPassword from "./views/ResetPassword";
//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Publisher from "./views/Publisher";
import SelfReg from "./views/SelfRegistrationPage";

function App() {
  return (
    <>
      {/* normal routes no special access */}
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/publish" element={<Publisher />} />
          <Route path="/reset/password" element={<Reset />}/>
          <Route path="/self-registration" element={<SelfReg />}/>
          <Route path="/reset/verify" element={<Verify duration={1000*60*2}/>}/>
          <Route path="/reset/reset-password" element={<ResetPassword />}/>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;