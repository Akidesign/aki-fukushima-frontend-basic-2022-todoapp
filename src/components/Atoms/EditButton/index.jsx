import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color";

export const EditButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <img src={pencil} />
    </Button>
  );
};

const Button = styled.button`
  cursor: pointer;
  display: flex;
  width: 20px;
  height: 20px;
  border: 0px;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.LIGHT_GRAY_TRANSPARENT};
  :hover {
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
    border-radius: 20px;
  }
`;

const img = styled.img`
  width: 20px;
  height: 20px;
`;
