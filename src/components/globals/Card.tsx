import React, { memo } from "react";
import { StyledCard } from "./Card.styled";

export const Card = memo(
  ({
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
        {image && <img className="card-image" src={image} alt={altImage} />}
        {!image && <div className="image-placeholder" />}
        <div className="card-bottom">{children}</div>
      </StyledCard>
    );
  }
);
