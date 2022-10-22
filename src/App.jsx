import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import LogIn from "./pages/LogIn.jsx";
import NoPage from "./pages/NoPage.jsx";
import SignUp from "./pages/SignUp.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logged from "./pages/Logged.jsx";
import Chatroom from "./pages/Chatroom.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LogIn />} />
          <Route path="logged" element={<Logged />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="chatroom" element={<Chatroom />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
