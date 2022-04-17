import React, { memo } from "react";
import { Card } from "./Card";
import { Flex } from "./DashboardComponents";
import { ITEMS_DISPLAYED } from "../../constants";

const loadingCards = Array.apply(null, Array(ITEMS_DISPLAYED));

export const LoadingCards = memo(() => {
  return (
    <Flex>
      {loadingCards.map((_, i) => (
        <Card key={`empty-card-${i}`} className="loading-card" />
      ))}
    </Flex>
  );
});
