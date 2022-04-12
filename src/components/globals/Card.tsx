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
        <img className="card-image" src={image} alt={altImage} />
        <div className="card-bottom">{children}</div>
      </StyledCard>
    );
  }
);

// const img = new Image();
// if (image) img.src = image;
// const height = img.height;
// const width = img.width;

// console.log({ height, width });
