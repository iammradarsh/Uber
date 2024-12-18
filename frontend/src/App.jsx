import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import Captainlogin from "./pages/Captainlogin";
import CaptainSignup from "./pages/CaptainSignup";
import { UserDataContext } from "./context/userContext";
import Start from "./pages/Start";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import { CaptainLogout } from "./pages/CaptainLogout";

const App = () => {
  const ans = useContext(UserDataContext);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <UserProtectWrapper>
              <Start />
            </UserProtectWrapper>
          }
        />
        {/* User */}
        <Route
          path="/login"
          element={
            <UserProtectWrapper>
              <UserLogin />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/signup"
          element={
            <UserProtectWrapper>
              <UserSignUp />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        ></Route>

        {/* Captain */}
        <Route
          path="/captain-login"
          element={
            <CaptainProtectWrapper>
              <Captainlogin />
            </CaptainProtectWrapper>
          }
        />
        <Route
          path="/captain-signup"
          element={
            <CaptainProtectWrapper>
              <CaptainSignup />
            </CaptainProtectWrapper>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          }
        />

        <Route
          path="/captain/logout"
          element={
            <CaptainProtectWrapper>
              <CaptainLogout />
            </CaptainProtectWrapper>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
