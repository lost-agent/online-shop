import React from "react";

export const ListItem = ({ product }) => {
  return (
    <div className="w-64 h-64 bg-red-500 rounded-2xl">
      <h2>{product.name}</h2>
    </div>
  );
};
