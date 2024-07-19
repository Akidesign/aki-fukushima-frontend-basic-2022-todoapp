import React, { useEffect } from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import { Alert } from "../../Atoms/Alert/index";

export const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();

  console.log(AlertHandlerContext.visible);
  AlertHandlerContext.setAlert("message");

  return (
    <Alert
      isActive={AlertHandlerContext.visible}
      context={AlertHandlerContext.errorText}
    />
  );
};
