import { useEffect, useState } from "react";

export const Debouncing = () => {
  const [product, setProduct] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => console.log("something"), 1000);

    return () => clearTimeout(timer);
  }, [product]);
  return (
    <input
      type="text"
      value={product}
      onChange={(e) => setProduct(e.target.value)}
    />
  );
};
