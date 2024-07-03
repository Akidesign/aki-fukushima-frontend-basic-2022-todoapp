import React, { useEffect, useState } from "react";
import { AddTaskButton } from "../../Atoms/AddTaskButton/index";
import { Task } from "../../Molecules/Task/index";
import styled from "styled-components";
import COLOR from "../../../variables/color";

export const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);

  const onAddTaskButtonClick = () => {
    setTaskList([...taskList, { name: "", initializing: true }]);
  };

  const onTaskComplete = (popTargetIndex) => {
    setTaskList(taskList.filter((task, index) => index !== popTargetIndex));
  };

  const onTaskNameChange = (value, editTargetIndex) => {
    if (value === "") {
      onTaskComplete(editTargetIndex);
    } else {
      setTaskList(() => {
        const newTaskList = [...taskList];
        newTaskList[editTargetIndex].name = value;
        newTaskList[editTargetIndex].initializing = false;
        return newTaskList;
      });
    }
  };

  // ローカルストレージからタスクを読み込む
  useEffect(() => {
    const res = localStorage.getItem("tasks");
    if (res !== null) {
      setTaskList(JSON.parse(res));
    }
  }, []);

  // タスクリストが変更されたらローカルストレージに保存する
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <StyledContainer>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            key={index}
            onTaskNameChange={(value) => onTaskNameChange(value, index)}
            onTaskComplete={() => onTaskComplete(index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
          />
        ))}
      </StyledTaskList>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  padding: 20px;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${COLOR.LIGHT_BLACK};
`;

const StyledTaskList = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  color: ${COLOR.LIGHT_GRAY};

  & > * {
    margin-top: 10px;
  }
`;
