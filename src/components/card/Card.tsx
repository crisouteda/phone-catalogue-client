import React from "react";
import { StyledCard } from "./Card.styled";
import { Text } from "../globals";

export const Card = ({ phone }: any) => {
  const priceHelper = () => {
    const priceHelper = phone.price.replace(/About /g, "");
    return priceHelper;
  };

  return (
    <StyledCard>
      <img className="card-image" src={phone.thumbnailFileName} alt="phone" />
      <div className="card-bottom">
        <Text secondary text={phone.name} />
        <Text bold text={priceHelper()} />
      </div>
    </StyledCard>
  );
};
