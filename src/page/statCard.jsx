// const StatCard = ({ title, value, icon }) => {
//   return (
//     <div className="
//       bg-gray-800/80 
//       p-6 
//       rounded-2xl 
//       shadow-xl 
//       hover:shadow-2xl 
//       hover:-translate-y-1 
//       transition-all 
//       duration-300 
//       border 
//       border-gray-700
//       text-center
//     ">
//       <div className="text-4xl mb-2">{icon}</div>
//       <h3 className="text-lg text-gray-300">{title}</h3>
//       <p className="text-3xl font-bold text-blue-400 mt-1">{value}</p>
//     </div>
//   );
// };

import React from 'react'

const StatCard = ({ title, value, icon }) => {
  return (
    <>
    <div className="
      bg-gray-800/80 
      p-6 
      rounded-2xl 
      shadow-xl 
      hover:shadow-2xl 
      hover:-translate-y-1 
      transition-all 
      duration-300 
      border 
      border-gray-700
      text-center
    ">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-lg text-gray-300">{title}</h3>
      <p className="text-3xl font-bold text-blue-400 mt-1">{value}</p>
    </div>
    </>
  )
}

export default StatCard;