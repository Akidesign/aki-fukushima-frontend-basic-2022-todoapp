import React from "react";
import ReactDOM from "react-dom";
import { MainPage } from "./components/Pages/MainPage";
import { AlertHandlerProvider } from "./contexts/alert_handler"; // 正しいパスを確認
import { AlertManager } from "./components/Organisms/AlertManager";
import "./style.css";

// Appコンポーネントの定義
const App = () => {
  return (
    <AlertHandlerProvider>
      <AlertManager />
      <MainPage />
    </AlertHandlerProvider>
  );
};

// Appコンポーネントをレンダリング
ReactDOM.render(<App />, document.getElementById("app"));
