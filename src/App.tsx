import { Routes } from "~/routes";
import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/authContext";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <ConfigProvider locale={ptBR}>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
          <GlobalStyles />
        </AuthProvider>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
