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
  padding: 60px 20px 20px;
  gap: 20px;

  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    padding-top: 60px;
  }
`;

const StyledTodoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;
