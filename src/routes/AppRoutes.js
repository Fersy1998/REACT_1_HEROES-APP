import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes = () => {

  return (
    <BrowserRouter>   
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/*" element={
                  <PrivateRoute>
                    <DashboardRoutes />
                  </PrivateRoute>
                }/>
            </Routes>
      
    </BrowserRouter>
  )
}
