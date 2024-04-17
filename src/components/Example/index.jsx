import React from "react";
import styled from "styled-components";
import COLOR from "../../variables/color";
import TEXTS from "../../variables/texts";

export const Example = () => {
  return <StyledText>This is example.</StyledText>;
};

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXTS.S}
`;
