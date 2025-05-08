import { useState, useCallback } from "react";

export const useQuantity = (product, updateQuantityFn) => {
  const [quantity, setQuantity] = useState(product.quantity || 0);

  const increase = useCallback(() => {
    const newQuantity = quantity + 1;
    setQuantity((prev) => prev + 1);
    updateQuantityFn({ ...product, quantity: newQuantity });
  }, [quantity, product, updateQuantityFn]);

  const decrease = useCallback(() => {
    const newQuantity = Math.max(quantity - 1, 0);
    setQuantity(newQuantity);
    updateQuantityFn({ ...product, quantity: newQuantity });
  }, [quantity, product, updateQuantityFn]);

  return {
    quantity,
    increase,
    decrease,
  };
};
