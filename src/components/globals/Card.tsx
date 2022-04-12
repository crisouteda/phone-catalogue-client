import React from "react";
import { StyledCard } from "./Card.styled";

export const Card = ({
  image,
  altImage,
  children,
  handleOnClick,
}: {
  children?: React.ReactNode;
  altImage?: string;
  image?: string;
  handleOnClick?: () => void;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <StyledCard onClick={handleOnClick}>
      <img className="card-image" src={image} alt={altImage} />
      <div className="card-bottom">{children}</div>
    </StyledCard>
  );
};
