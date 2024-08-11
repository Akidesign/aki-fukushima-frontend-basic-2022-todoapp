import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import BREAKPOINT from "../../../variables/breakpoint"; // BREAKPOINTをインポート

export const Alert = ({ isActive, context }) => {
  return (
    <AlertContainer alertActive={isActive}>
      <AlertContext>{context}</AlertContext>
    </AlertContainer>
  );
};

const AlertContainer = styled.div`
  width: 100%;
  top: 80px;
  display: flex;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  max-width: 400px;
  padding: 10px 20px;
  border-radius: 4px;
  background: ${COLOR.RED};
  transition: all 0.5s ease 0s;
  transform: ${({ alertActive }) =>
    alertActive ? "translate(-50%, 0)" : "translate(-50%, -100%)"};
  opacity: ${({ alertActive }) => (alertActive ? 1 : 0)};
  pointer-events: ${({ alertActive }) => (alertActive ? "auto" : "none")};
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    transform: ${({ alertActive }) =>
      alertActive ? "translate(-50%, 0)" : "translate(-50%, -100%)"};
    width: 100%;
    max-width: 400px;
  }
`;

const AlertContext = styled.div`
  font-size: 14px;
  color: ${COLOR.WHITE};
  font-family: ${FONTFAMILY.NOTO_SANS};
`;
