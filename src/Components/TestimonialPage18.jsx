import React from "react";

function TestimonialPage18() {
  return (
    <div className=" flex p-2 bg-slate-200 h-64 md:h-72 w-64 md:w-72 rounded-md drop-shadow-md hover:drop-shadow-lg transition duration-100 ease-in cursor-pointer">
      <div className="flex flex-col justify-evenly">
        <div className="flex p-2 md:p-4 items-center space-x-4 md:space-x-5">
          <img className="w-6 h-6 rounded-full" src="" alt="user Img" />
          <div className="flex flex-col">
            <h2>Sandeep Singh</h2>
            <p className="text-sm text-gray-500">IIT Guhwati</p>
          </div>
        </div>
        <p className="text-sm font-normal text-gray-800 line-clamp-6 mb-4 md:mb-5">
          {`"Edfling course is a good and advanced platform and it provide best
          mentor and best material and the best feature of this platform it
          provide the quick doubt support and weekly doubt sessions to solve
          your query and you will get good and practical knowledge in easy way.
          Edfling course is a good and advanced platform and it provide best
          mentor and best material."`}
        </p>
        <div className=''>
          <button className="flex text-green-700 text-sm font-normal p-2 md:p-3 border border-gray-500/40 rounded-md hover:animate-pulse ">
            Read Full review
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-4 mt-1 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestimonialPage18;
