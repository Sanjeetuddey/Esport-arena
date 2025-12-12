import React from "react";

const EventCard = ({ name, date, teams, prize, image }) => {
  return (
    <div
      className="rounded-2xl overflow-hidden bg-gray-800/80 border border-gray-700 shadow-xl 
      hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
        <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition"
      />
           
      <div className="p-6">
        <h3 className="text-2xl font-bold text-blue-400 mb-2">{name}</h3>
        <p className="text-gray-300 mb-2">📅 {date}</p>
        <p className="text-gray-300 mb-2">👥 Teams: {teams}</p>
        <p className="text-gray-300">🏆 Prize Pool: {prize}</p>

        <button
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition shadow-md"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;