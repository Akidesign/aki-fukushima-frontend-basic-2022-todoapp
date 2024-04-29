import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";

export const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
};

const StyledText = styled.div`
  ${TEXT.L}
  color: ${COLOR.WHITE};
  font-family: ${FONTFAMILY.ROBOTO};

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    ${TEXT.M}
    font-family: ${FONTFAMILY.NOTO_SANS_JP}
  }
`;
