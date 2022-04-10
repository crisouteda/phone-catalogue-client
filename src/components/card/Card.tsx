import React from "react";
import { StyledCard } from "./Card.styled";
import { Text } from "../globals";
import { useSearchParams } from "react-router-dom";

export const Card = ({ phone }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  const priceHelper = () => {
    const priceHelper = phone?.price.replace(/About /g, "");
    return priceHelper;
  };

  return (
    <StyledCard onClick={() => setSearchParams({ id: phone?.id })}>
      <img className="card-image" src={phone.thumbnailFileName} alt="phone" />
      <div className="card-bottom">
        <Text secondary text={phone.name} />
        <Text bold text={priceHelper()} />
      </div>
    </StyledCard>
  );
};
