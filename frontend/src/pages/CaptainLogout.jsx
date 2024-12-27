import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CaptainLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    // Logout API call
    axios
      .get(`${import.meta.env.VITE_API_URL}/captains/logout`, {
        headers: { Authorization: `Bearer ${token}` },
        "ngrok-skip-browser-warning": true,
      })
      .then((response) => {
        if (response.status === 200) {
          // Remove token and navigate to login
          localStorage.removeItem("token");
          // localStorage.removeItem("role");

          navigate("/captain-login");
        }
      })
      .catch((error) => {
        console.error("API error during logout:", error);
        // Optional: Navigate to login anyway if logout fails
        navigate("/captain-login");
      });
  }, [navigate, token]);

  return <div>Logging you out...</div>;
};

export default CaptainLogout;
