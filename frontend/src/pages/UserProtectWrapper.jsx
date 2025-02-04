import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../context/userContext";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  // const role = localStorage.getItem("role");
  const navigate = useNavigate();
  // const location = useLocation(); // Get the current location

  const { user, setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      // If either token or role is missing, redirect to login with the attempted URL as state
      navigate("/login");
    } else {
      // If role is invalid, redirect to an unauthorized page
      navigate("/home");
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.captain);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [token]);
  return <>{children}</>;
};

export default UserProtectWrapper;
