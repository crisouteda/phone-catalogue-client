import React from "react";
import { Text, Card } from "../globals";
import { useSearchParams } from "react-router-dom";

export const PhoneCard = ({ phone }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  const priceHelper = () => {
    const priceHelper = phone?.price.replace(/About /g, "");
    return priceHelper;
  };

  return (
    <Card
      handleOnClick={() => setSearchParams({ id: phone?.id })}
      image={phone.thumbnailFileName}
      altImage={`phone-${phone.name}`}
    >
      <Text secondary text={phone.name} />
      <Text bold text={priceHelper()} />
    </Card>
  );
};
