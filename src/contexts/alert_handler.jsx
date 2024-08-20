import React, { createContext, useContext, useState } from "react";

const AlertHandlerContext = createContext();

export const AlertHandlerProvider = ({ children }) => {
  const [alertState, setAlertState] = useState({
    visible: false,
    errorText: "",
  });

  const setAlert = (errorText) => {
    setAlertState({
      visible: true,
      errorText: errorText,
    });
    setTimeout(() => {
      closeAlert(); // 自動でアラートを閉じる
    }, 5000); // 5秒後に閉じる
  };

  const closeAlert = () => {
    setAlertState({
      visible: false,
      errorText: "",
    });
  };

  const contextValue = {
    ...alertState,
    setAlert: setAlert,
    closeAlert: closeAlert,
  };

  return (
    <AlertHandlerContext.Provider value={contextValue}>
      {children}
    </AlertHandlerContext.Provider>
  );
};

export const useAlertHandlerContext = () => useContext(AlertHandlerContext);
