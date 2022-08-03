import React from "react";
import Image from "next/image";
import loader from "../public/loader.gif";

const Spinner = () => {
  return (
    <>
      <Image className="w-[200px] m-auto block" src={loader} />
    </>
  );
};

export default Spinner;
