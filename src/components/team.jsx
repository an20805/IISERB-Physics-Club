import React from "react";
import { p1 } from '../assets';
const Member=(props) => {
    return (
        <div className='card  '>
          <img 
          className='product--image rounded-full '
          src={props.img}
          />
          <h2 className="text-xl font-semibold py-2">{props.name}</h2>
          <p className="text-lg font-medium bg-[#38f1bc]/75 text-black ">{props.batch} Batch</p>
        </div>
    )
}
// shadow-md shadow-[#38f1bc]
export default Member