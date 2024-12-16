import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  axios
    .get(`${import.meta.env.VITE_API_URL}/users/logout`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    })
    .catch((error) => console.log("api error", error));

  return <div>User Logged Out</div>;
};

export default UserLogout;
