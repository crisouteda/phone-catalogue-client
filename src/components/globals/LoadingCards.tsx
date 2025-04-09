import React, { memo } from "react";
import { Flex } from "./DashboardComponents";
import { ITEMS_DISPLAYED } from "../../constants";
import { Card } from "./Card";

const loadingCards = Array.apply(null, Array(ITEMS_DISPLAYED));

export const LoadingCards = memo(() => (
  <Flex>
    {loadingCards.map((_, i) => (
      <Card key={`empty-card-${i}`} className='loading-card' />
    ))}
  </Flex>
));
