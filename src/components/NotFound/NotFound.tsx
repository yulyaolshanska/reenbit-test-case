import React from "react";
import { NotFoundBox, NotFoundText } from "./NotFound.styled";

interface NotFoundProps {
  value: string;
}

export const NotFound: React.FC<NotFoundProps> = ({ value }) => {
  return (
    <NotFoundBox>
      <NotFoundText>
        Cannot find characters with name: {value}. Please, try again.
      </NotFoundText>
    </NotFoundBox>
  );
};
