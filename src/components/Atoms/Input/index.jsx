import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/breakpoint";

export const Input = ({ onEditComplete, defaultValue }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleBlur = () => {
    onEditComplete(inputRef.current.value);
  };

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    onEditComplete(inputRef.current.value);
  };

  return (
    <StyledInput
      ref={inputRef}
      defaultValue={defaultValue}
      onBlur={handleBlur}
      onkeyDown={handleKeyDown}
    />
  );
};

const StyledInput = styled.div`
  padding: 0px 4px;
  border-radius: 2px;
  gap: 10px;
  font-family: ${FONTFAMILY.NOTO_SANS};
  font-weight: 500;
  margin: auto;
  line-height: 20px;
  background-color: ${COLOR.BLACk};
  color: ${COLOR.LIGHT_GRAY} ${TEXT.S};
`;
