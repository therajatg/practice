import { memo } from "react";

export const Paul = ({ fn }) => {
  console.log("prop", fn);
  return <div>Something must be written here</div>;
};

export const MemoizedPaul = memo(Paul);
