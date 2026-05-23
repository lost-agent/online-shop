import React from "react";

export const ListItem = ({ product }) => {
  return (
    <div className="w-64 h-64 bg-gray-400 rounded-2xl">
      <h2>{product.name}</h2>
    </div>
  );
};
