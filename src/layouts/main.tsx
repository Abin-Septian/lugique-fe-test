import { Roboto } from "next/font/google";
import React, { ReactNode } from "react";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: [],
});

const MainLayouts = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`w-full max-w-xs m-auto h-screen min-h-screen bg-white ${roboto.className}`}
    >
      {children}
    </div>
  );
};

export default MainLayouts;
