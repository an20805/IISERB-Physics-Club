import React from "react";
import { e1 } from "../assets";

const HorizontalCard = (props) => {
  return (
    <div className="relative flex w-full max-w-[100rem] flex-row rounded-xl bg-gray bg-clip-border text-gray-700 shadow-md mx-[10rem] my-[4rem]">
      <div className="relative w-1/4 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
        <img
          src={props.img}
          alt="image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">

        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {props.title}
        </h4>
        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
        {props.abstract}
        </p>
        <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
          {props.name}
        </h6>
      </div>
    </div>
  );
}

export default HorizontalCard
