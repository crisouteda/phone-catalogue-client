import React, { memo } from "react";
import { Card } from "./Card";
import { Flex } from "./DashboardComponents";

const loadingCards = Array.apply(null, Array(10));

export const LoadingCards = memo(() => {
  return (
    <Flex>
      {loadingCards.map((_, i) => (
        <Card key={`empty-card-${i}`} />
      ))}
    </Flex>
  );
});
