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
          <StyledTaskName>{taskName}</StyledTaskName>
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
  padding: 2px 6px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
`;

const StyledCheckboxContainer = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

const StyledNameAndButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;
`;

const StyledTaskName = styled.div`
  color: ${COLOR.LIGHT_GRAY};
  font-family: ${FONT_FAMILY.NOTO_SANS};
  ${TEXT.S}
  margin-right: 10px;
`;

const StyledEditButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;
