import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import Captainlogin from "./pages/Captainlogin";
import CaptainSignup from "./pages/CaptainSignup";
import { UserDataContext } from "./context/userContext";
import Start from "./pages/Start";

const App = () => {
  const ans = useContext(UserDataContext);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
