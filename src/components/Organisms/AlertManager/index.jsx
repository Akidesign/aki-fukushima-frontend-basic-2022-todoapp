import React from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler"; // パスを確認
import { Alert } from "../../Atoms/Alert/index";

export const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();

  return (
    <Alert
      isActive={AlertHandlerContext.visible}
      context={AlertHandlerContext.errorText}
    />
  );
};
