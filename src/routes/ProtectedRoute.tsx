import { Navigate, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { useAuth } from "../assets/AuthProvider";



export default function ProtectedRoute(){
    const auth = useAuth();

return auth.isAuthenticaded ? <Outlet /> : <Navigate to="/" />;}

