import React, { useState } from "react";
import { Checkbox } from "../../Atoms/Checkbox/index";
import { EditButton } from "../../Atoms/EditButton/index";
import { Input } from "../../Atoms/Input/index";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONT_FAMILY from "../../../variables/font_family";

export const Task = ({
  taskName = "",
  onTaskComplete,
  defaultIsEditing = false,
  onTaskNameChange,
}) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);

  const onEditComplete = (value) => {
    setIsEditing(false);
    onTaskNameChange(value);
  };

  const onEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <StyledContainer>
      <StyledCheckboxContainer>
        <Checkbox onClick={onTaskComplete} />
      </StyledCheckboxContainer>
      {isEditing ? (
        <Input onEditComplete={onEditComplete} defaultValue={taskName} />
      ) : (
        <StyledNameAndButtonContainer>
          <StyledTaskName>{TaskName}</StyledTaskName>
          <StyledEditButtonContainer>
            <EditButton onClick={onEditButtonClick} />
          </StyledEditButtonContainer>
        </StyledNameAndButtonContainer>
      )}
    </StyledContainer>
  );
};
export default Task;

const StyledContainer = styled.div`
  display: flex;
  width: 256px;
  padding: 2px 6px;
  align-items: center;
  gap: 10px;
`;

const StyledCheckboxContainer = styled.div``;
const StyledNameAndButtonContainer = styled.div``;
const StyledTaskName = styled.div``;
const StyledEditButtonContainer = styled.div``;
