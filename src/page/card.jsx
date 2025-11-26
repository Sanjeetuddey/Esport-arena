// import React from 'react'


// const Card = ({ title, value }) => {
//   return (
//     <>
//     <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
// <h3 className="text-xl text-gray-300">{title}</h3>
// <p className="text-4xl font-bold mt-2 text-blue-400">{value}</p>
// </div>
//     </>
//   )
// }

// export default Card;

import React from "react";

const Card = ({ title, value, icon }) => {
  return (
    <div className="
      bg-gray-800 
      p-6 
      rounded-2xl 
      shadow-xl 
      hover:shadow-2xl 
      hover:-translate-y-1 
      transition-all 
      duration-300 
      border 
      border-gray-700
    ">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl text-gray-300 font-medium">{title}</h3>
        <span className="text-3xl">{icon}</span>
      </div>

      <p className="text-5xl font-extrabold text-blue-400">
        {value}
      </p>
    </div>
  );
};

export default Card;