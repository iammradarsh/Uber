import React, { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  //   const role = localStorage.getItem("role");
  const navigate = useNavigate();
  //   const location = useLocation(); // Get the current location

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      // If either token or role is missing, redirect to login with the attempted URL as state
      navigate("/captain-login");
    } else {
      // If role is invalid, redirect to an unauthorized page
      navigate("/captain-home");
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        localStorage.removeItem("token");
        navigate("/captain-login");
      });
  }, [token]);
  return <>{children}</>;
};

export default CaptainProtectWrapper;
