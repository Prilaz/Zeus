import React from "react";
import { isAuthenticated } from "../api/userApi";
import { Navigate, Outlet } from "react-router-dom";

const UserRoutes = () => {
  return (
    <>
      isAuthenticated() ? <Outlet /> : <Navigate to={"/login"} />
    </>
  );
};

export default UserRoutes;
