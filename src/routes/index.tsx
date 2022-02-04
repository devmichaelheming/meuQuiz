import { AuthContext } from "~/context/authContext";
import React, { useContext } from "react";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes = () => {
  const { signed } = useContext(AuthContext);

  return (
    <>
      <AuthRoutes />
      {signed ? <AppRoutes /> : ""}
    </>
  );
};

export { Routes };
