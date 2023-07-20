import React from "react";
import Pic1 from "../images/page18/Pic1.png";

function Page18Category({ title, position,pic }) {
  if (position) {
    return (
      <div className="flex items-center space-x-5">
        <div>
          <img className="" src={pic} />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl text-green-700">{title}</h2>
          <p className="text-sm text-gray-500 ">
            Edflings is a Global training provider based across the world that
            specialises in different different courses related to different
            domain.We provide you the best mentor with best courses Edflings is
            a Global training provider based across the world that specialises
            in different different courses related to different domain.We
            provide you the best mentor with best courses.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center space-x-5">
        <div className="flex flex-col">
          <h2 className="text-2xl text-green-700">{title}</h2>
          <p className="text-sm text-gray-500 ">
            Edflings is a Global training provider based across the world that
            specialises in different different courses related to different
            domain.We provide you the best mentor with best courses Edflings is
            a Global training provider based across the world that specialises
            in different different courses related to different domain.We
            provide you the best mentor with best courses.
          </p>
        </div>
        <div>
          <img className="" src={pic} />
        </div>
      </div>
    );
  }
}

export default Page18Category;
