import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

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
    e.target.blur();
  };

  return (
    <StyledInput
      ref={inputRef}
      defaultValue={defaultValue}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
};

const StyledInput = styled.input`
  padding: 0px 4px;
  border-radius: 2px;
  line-height: 20px;
  width: 100%;
  outline: none;
  border: none;
  background-color: ${COLOR.BLACK};
  color: ${COLOR.WHITE};
  ${TEXT.S}
`;
