import React, { useState, useEffect } from "react";
import ExploreCard from "./ExploreCard.js";

const CategoryTagsPageItemSection = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <ExploreCard
          key={item.id}
          id={item.id}
          itemName={item.itemName}
          itemPrice={item.itemPrice}
          itemImage={item.itemImage}
        />
      ))}
    </>
  );
};

export default CategoryTagsPageItemSection;
