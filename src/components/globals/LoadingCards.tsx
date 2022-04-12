import React, { memo } from "react";
import { Card } from "./Card";
import { Flex } from "./DashboardComponents";
import { ItemsDisplayed } from "../../constants";

const loadingCards = Array.apply(null, Array(ItemsDisplayed));

export const LoadingCards = memo(() => {
  return (
    <Flex>
      {loadingCards.map((_, i) => (
        <Card key={`empty-card-${i}`} />
      ))}
    </Flex>
  );
});
