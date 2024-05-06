import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import plus from "../../../assets/svg/plus.svg";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";

export const AddTaskButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <PlusButton src={plus} />
      <AddTaskText>タスクを追加</AddTaskText>
    </Button>
  );
};

const Button = styled.button``;
