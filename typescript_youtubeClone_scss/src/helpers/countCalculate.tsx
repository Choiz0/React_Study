import React from "react";

const countCalculate = (viewCount: number) => {
  let newViewCount: string | number = "";
  if (viewCount > 100000) {
    newViewCount = (viewCount / 100000).toFixed(1) + "M";
  } else if (viewCount > 1000) {
    newViewCount = (viewCount / 1000).toFixed(1) + "K";
  } else newViewCount = viewCount;

  return newViewCount;
};

export default countCalculate;
