import React from "react";
import { Title } from "../../Atoms/Title";
import { TodoCard } from "../../Organisms/TodoCard";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";

export const MainPage = () => {
  return (
    <StyledMainPageContainer>
      <Title />
      <StyledTodoCardContainer>
        <TodoCard />
      </StyledTodoCardContainer>
    </StyledMainPageContainer>
  );
};

const StyledMainPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;

  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    padding: 20px;
  }
`;

const StyledTodoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  width: 500px;
`;
