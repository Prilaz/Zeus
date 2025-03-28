import { FormControlLabel, Radio } from "@mui/material";
import React, { useState } from "react";

const PriceRadio = ({handleFilters}) => {
  const prices = [
    {
      id: 0,
      title: "All",
      value: [],
    },
    {
      id: 1,
      title: "Upto Rs.1000",
      value: [0, 999],
    },
    {
      id: 2,
      title: "Rs.1000 - Rs.10000",
      value: [1000, 9999],
    },
    {
      id: 3,
      title: "Rs.10000 - Rs.50000",
      value: [10000, 49999],
    },
    {
      id: 4,
      title: "Rs.50000 - Rs.100000",
      value: [50000, 99999],
    },
    {
      id: 5,
      title: "Above Rs.100000",
      value: [100000, 9999999],
    },
  ];

  let [price, setPrice] = useState([]);
  const handleChange = (e) => {
    let priceId = e.target.value;
    let priceValue = prices.find((p) => p.id == priceId);
    let selectedPrice = priceValue.value;
    setPrice(selectedPrice);
    handleFilters(selectedPrice ,'product_price');
  };

  return (
    <>
      {prices.map((price) => {
        return (
          <FormControlLabel
            control={
              <Radio size="medium" value={price.id} onChange={handleChange} />
            }
            label={price.title}
          />
        );
      })}
    </>
  );
};

export default PriceRadio;
