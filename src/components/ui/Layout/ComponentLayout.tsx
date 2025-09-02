import type { ReactNode } from "react";

import Footer from "./Footer";
import Navber from "./Navber";

interface IProps {
  children: ReactNode;
}

export default function ComponentLayout({ children }: IProps) {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navber></Navber>
     <div className="grow-1">
       {children}
     </div>
      <Footer></Footer>
    </div>
  );
}
