import React from "react";
import EventCard from "./eventCard";


import bgImage from "../assets/dash3.webp";
import valorantImg from "../assets/valorant.jpeg";
import bgmiImg from "../assets/bgmi.jpeg";
import fifaImg from "../assets/FIFA.jpeg";
import csImg from "../assets/cs.jpeg";

const Event = () => {
  return (
    <div
      className="p-8 min-h-screen text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="backdrop-blur-sm bg-black/60 p-8 rounded-2xl shadow-xl">

        <h2 className="text-4xl font-bold mb-10 text-center tracking-wide drop-shadow-xl">
          Esports Events & Tournaments
        </h2>

        <div className="flex justify-center gap-4 mb-10">
          <button className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-all shadow-md">
            Upcoming
          </button>
          <button className="px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all shadow-md">
            Past Events
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <EventCard
            name="Valorant Showdown"
            date="Dec 12, 2025"
            teams="16"
            prize="₹25,000"
            image={valorantImg}
          />
          <EventCard
            name="BGMI Arena Cup"
            date="Dec 20, 2025"
            teams="25"
            prize="₹40,000"
            image={bgmiImg}
          />
          <EventCard
            name="FIFA Ultimate Championship"
            date="Jan 03, 2026"
            teams="32"
            prize="₹15,000"
            image={fifaImg}
          />
          <EventCard
            name="CS:GO Elite Masters"
            date="Jan 15, 2026"
            teams="20"
            prize="₹30,000"
            image={csImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Event;

