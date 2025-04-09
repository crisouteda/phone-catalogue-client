import React, { memo } from "react";
import { StyledCard } from "./Card.styled";

export const Card = memo(
  ({
    image,
    altImage,
    children,
    handleOnClick,
    className,
  }: {
    children?: React.ReactNode;
    altImage?: string;
    image?: string;
    handleOnClick?: () => void;
    className?: string;
  }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    return (
      <StyledCard onClick={handleOnClick} className={className}>
        {image && (
          <img
            className="card-image"
            height={212}
            width={160}
            src={image}
            alt={altImage}
          />
        )}
        {!image && <div className="image-placeholder" />}
        <div className="card-bottom">{children}</div>
      </StyledCard>
    );
  }
);
