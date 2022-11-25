import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import LogIn from "./pages/LogIn.jsx";
import NoPage from "./pages/NoPage.jsx";
import SignUp from "./pages/SignUp.jsx";
import ChangeInfo from "./pages/ChangeInfo.jsx";
import Logged from "./pages/Logged.jsx";
import Chatroom from "./pages/Chatroom.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailToResetPassword from "./pages/EmailToResetPassword.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LogIn />} />
          <Route path="logged" element={<Logged />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="chatroom" element={<Chatroom />} />
          <Route path="change-info" element={<ChangeInfo />} />
          <Route path="reset-password" element={<ChangePassword />} />
          <Route
            path="email-reset-password"
            element={<EmailToResetPassword />}
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
