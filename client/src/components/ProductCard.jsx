import React from "react";

export const ProductCard = ({ product }) => {
  return (
    <div className="w-[300px] h-[400px] bg-black border-[1px] border-[#313131]">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm">{product.description}</p>
        <p className="text-lg font-bold">{product.price}</p>
        <button className="bg-[#00c8ff] text-black px-4 py-2 rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
