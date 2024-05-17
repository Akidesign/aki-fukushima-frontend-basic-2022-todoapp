import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

export const Input = ({ onEditComplete, defaultValue }) => {
  //defaultValue=[State]text と input要素の初期値
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleBlur = () => {
    onEditComplete(inputRef.current.value);
  };
  //input要素からフォーカスが外れた時に編集完了処理を行う

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    onEditComplete(inputRef.current.value);
  };
  //Enter 入力→編集完了処理を行う

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
  display: flex;
  width: 232px;
  padding: 0px 4px;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${COLOR.COLOR_BLACk};
`;

const StyledText = styled.p`
  font-weight: 500;
  margin: auto;
  line-height: 20px;
  color: ${COLOR.LIGHT_GRAY} ${TEXT.S};
`;
