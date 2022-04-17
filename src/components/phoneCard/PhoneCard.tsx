import React, { memo } from "react";
import { Text, Card } from "../globals";
import { useSearchParams } from "react-router-dom";

export const PhoneCard = memo(({ phone }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  const priceHelper = () => {
    const priceHelper = phone?.price?.replace(/About /g, "");
    return priceHelper;
  };

  return (
    <Card
      className="phone-card"
      handleOnClick={() => setSearchParams({ id: phone?.id })}
      image={phone.thumbnailFileName}
      altImage={`phone-${phone.name}`}
    >
      <Text secondary isTitle text={phone.name} />
      <Text bold isTitle text={priceHelper()} />
    </Card>
  );
});
