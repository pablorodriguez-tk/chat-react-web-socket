import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { ChatPage } from "../pages/ChatPage";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { auth, verificaToken } = useContext(AuthContext);

  useEffect(() => {
    verificaToken();
  }, [verificaToken]);

  if (auth.checking) {
    return <h1>Espere por favor</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute isAuthenticated={auth.logged}>
              <ChatPage />
            </PublicRoute>
          }
        />
        <Route
          path="/auth/*"
          element={
            <PrivateRoute isAuthenticated={auth.logged}>
              <AuthRouter />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
};
