import React from "react";
import styled from "styled-components";
import check from "../../../assets/svg/check.svg";
import COLOR from "../../../variables/color";

export const Checkbox = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <CheckButton src={check} />
    </Button>
  );
};

const Button = styled.button`
  padding: 0;
  display: flex;
  width: 20px;
  height: 20px;
  cursor: pointer;
  flex-shrink: 0;
  background: none;
  border-radius: 2px;
  border: 2px solid ${COLOR.LIGHT_GRAY};
`;

const CheckButton = styled.img`
  width: 100%;
  height: 100%;
  flex: 1 0 0;
  align-self: stretch;
  opacity: 0;
  :hover {
    opacity: 1;
  }
`;
