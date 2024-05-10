import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import plus from "../../../assets/svg/plus.svg";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";

export const AddTaskButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <PlusButton src={plus} />
      <AddTaskText>タスクを追加</AddTaskText>
    </Button>
  );
};

const Button = styled.button`
  padding: 2px 6px;
  border: 0px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 10px;
  cursor: pointer;
  background-color: ${COLOR.GREEN_TRANSPARENT};
  :hover {
    background-color: ${COLOR.GREEN_TRANSLUCENT};
    border-radius: 12px;
  }
`;

const PlusButton = styled.img`
  width: 20px;
  height: 20px;
`;

const AddTaskText = styled.p`
  ${TEXT.S}
  color: ${COLOR.GREEN};
  font-family: ${FONTFAMILY.NOTO_SANS};
  margin: 0;
`;
