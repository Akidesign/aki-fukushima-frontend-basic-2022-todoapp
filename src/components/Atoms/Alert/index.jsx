import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";

export const Alert = ({ isActive, context }) => {
  return (
    <AlertContainer alertActive={isActive}>
      <AlertContext>{isActive}</AlertContext>
    </AlertContainer>
  );
};

const AlertContainer = styled.div`
  top: 80px;
  display: flex;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  width: 100%;
  max-width: 360px;
  padding: 10px 20px;
  border-radius: 4px;
  background: ${COLOR.RED};
  transition: all 0.5s ease 0s;
  transform: translate(-50%, 0);
  opacity: 1;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    transform: translate(-50%, 100%);
  }
`;

const AlertContext = styled.div`
  ${TEXTS.S};
  color: ${COLOR.WHITE};
  font-family: ${FONTFAMILY.NOTO_SANS};
`;
